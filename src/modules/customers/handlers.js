'use strict';

const Joi = require('joi');
const Models = require('./models');

exports.create = {
    validate: {
        payload: {
            nombre: Joi.string().max(80).required().label('nombre'),
            apellidoPaterno: Joi.string().max(80).required().label('apellido-paterno'),
            apellidoMaterno: Joi.string().max(80).required().label('apellido-materno'),
            rfc: Joi.string().max(20).required().label('rfc'),
        }
    },
    handler: async (request, reply) => {

        try {
            const {
              nombre,
              apellidoPaterno,
              apellidoMaterno,
              rfc
            } = request.payload;

            const customerData = await Models.create(nombre, apellidoPaterno, apellidoMaterno, rfc);

            reply(customerData);
        }
        catch (err) {
            reply(err);
        }
    }
};

exports.list = {
    handler: async (request, reply) => {

        try {
            let customerData = await Models.list();

            reply(customerData);
        }
        catch (err) {
            reply(err);
        }
    }
};
