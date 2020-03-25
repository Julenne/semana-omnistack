const connection = require('../database/connection');

module.exports = {
    async index(request,response){
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();//conta quantos incidentes tem no total
        

        const incidents = await connection('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')
        .limit(5)//retorna só 5 incidentes por vez
        .offset((page - 1) * 5)//pular 5 registros por pagina 5, 10,15
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf',
        ]);

        response.header('X-TotalCount', count['count(*)']);

        return response.json(incidents);
        
    },

    async create(request,response){//para criar um incidente
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;//pega o id do cabeçalho

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({id})
    },

    async delete(request,response){//para deletar um incidente
        const { id } = request.params;//para verificar se foi criado pela própria ONG
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        if(incident.ong_id != ong_id){
            return response.status(401).json({error:'Operation not permited.'});
        }
        await connection('incidents').where('id',id).delete();//deletar 

        return response.status(204).send();//resposta que deu sucesso

    }
};