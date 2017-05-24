'use strict';

const Joi = require('joi');
const Models = require('./models');

exports.create = {
    validate: {
        payload: {
            clave: Joi.string().max(6).required().label('clave'),
            nombre: Joi.string().max(80).required().label('nombre'),
            apellidoPaterno: Joi.string().max(80).required().label('apellido-paterno'),
            apellidoMaterno: Joi.string().max(80).required().label('apellido-materno'),
            rfc: Joi.string().max(13).required().label('rfc'),
        }
    },
    handler: async (request, reply) => {

        try {
            const {
                clave,
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                rfc
            } = request.payload;

            const customerData = await Models.create(clave, nombre, apellidoPaterno, apellidoMaterno, rfc);

            reply(customerData);
        }
        catch (err) {
            reply(err);
        }
    }
};

exports.update = {
    validate: {
        payload: {
            clave: Joi.string().max(6).required().label('clave'),
            nombre: Joi.string().max(80).required().label('nombre'),
            apellidoPaterno: Joi.string().max(80).required().label('apellido-paterno'),
            apellidoMaterno: Joi.string().max(80).required().label('apellido-materno'),
            rfc: Joi.string().max(13).required().label('rfc'),
        }
    },
    handler: async (request, reply) => {

        try {
            const {
                clave,
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                rfc
            } = request.payload;

            const customerData = await Models.update(clave, nombre, apellidoPaterno, apellidoMaterno, rfc);

            reply(customerData);
        }
        catch (err) {
            reply(err);
        }
    }
};

exports.get = {
    validate: {
        params: {
            clave: Joi.string().max(6).required().label('clave')
        }
    },
    handler: async (request, reply) => {
        const { clave } = request.params;

        try {
            const customerData = await Models.get(clave);

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

exports.createRandomHash = {
    handler(request, reply) {
        return reply({
            type: 'customer',
            hash: require('crypto').randomBytes(3).toString('hex')
        });
    }
};
