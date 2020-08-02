const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');//para que retorne um erro 400 e não 500
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());//express vai converter o json no corpo do servidor em um objeto antes da requisição
app.use(routes)

app.use(errors());

module.exports = app;
/*Metodos HTTP
*get: Buscar uma informação do backend
*post: criar uma informação no backend
*put: alterar uma informação no backend
*delete: deletar uma informação no backend

O insomnia será utilizado para testar as rotas e os métodos
que não dá para usar no navegador

O nodemon é uma biblioteca para desenvolvimento e não ficar chamando "node index.js".
Para usar: package.json>scripts>start e digitar nodemon index.js e depois executar: npm start
*/
/**
 * Tipos de Paramêtros:
 * 
 * Query Params(request.query): Parâmetros nomeados enviados na rota após o simbolo de interrogação e geralmente servem para filtros,paginação(normalmente o query params vem depois do "?").
 * Route Params(request.params): Parâmetros utilizados para identificar recursos.
 * Request Body(request body): Corpo da requisição utilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Será utilizado o SQLite
 * 
 * Driver: SELECT *FROM users
 * Query Builder(utilizando js): table('users').select('*').where()
 * O query builder utilizado será o knex.js funciona para varios banco SQL. 
 * "npm instal knex"
 * "npm install sqlite3"
 * "npx knex init" - executa o knex
 * "npx knex" - dá para ver alguns comandos importantes
 * 
 * 
 * Sobre fazer testes da aplicação: importante para saber se a aplicação está funcionando corretamente mesmo com varias páginas (por exemplo)
 * TDD(Test-driven Development) 
 * Jest -> framework de testes utilizado na aplicação(npm install jest)
 */
