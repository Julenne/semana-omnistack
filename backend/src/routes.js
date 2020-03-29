const { celebrate,Segments,Joi } = require('celebrate');//validações
const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
/**
 * query params
 * route params
 * body params
 */

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })                            
}), OngController.create);// o celebrate(validação) deve vir antes da inserção(OngController)

routes.get('/incidents',celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents',IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

routes.get('/profile',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

module.exports = routes;