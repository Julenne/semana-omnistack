const crypto = require('crypto');//criptografia no id
const connection = require('../database/connection');//conecta com o banco de dados

module.exports = {

    async index(request,response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)//já vai retornar um array
    },

    async create(request,response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
        //quando o node ver esse codigo ele vai esperar isso aqui acabar
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        return response.json({ id });
    }
};