//supertest = faz requisições http e ao inves do axios ela é recomendada para a utilização em testes
//para instalar: npm install supertest 
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')
describe('ONG', () => {
    /**
     * afterEach=executar algo depois de um teste
     * afterAll=executar algo depois todos os teste
     * beforeEache= executar algo antes de um teste
     */
    beforeEach( async() => {
        await connection.migrate.rollback();//limpar o banco de dados
        await connection.migrate.latest();//para conexão com o banco de dados
    });

    afterAll(async()=>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email:"contato@contato.com",	
                whatsapp:"1000000000",
                city:"Rio de Janeiro",
                uf:"RJ"
            });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})