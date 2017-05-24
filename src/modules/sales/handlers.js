'use strict';

const Joi = require('joi');
const Models = require('./models');

exports.create = {
    validate: {
        payload: {
            clave: Joi.string().max(6).required().label('clave'),
            descripcion: Joi.string().max(80).required().label('descripcion'),
            precio: Joi.number().required().label('precio'),
            modelo: Joi.string().max(80).label('modelo'),
            existencia: Joi.number().required().label('existencia'),
        }
    },
    handler: async (request, reply) => {

        try {
            const {
                clave,
                descripcion,
                precio,
                modelo,
                existencia
            } = request.payload;

            const itemData = await Models.create(clave, descripcion, precio, modelo, existencia);

            reply(itemData);
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
            descripcion: Joi.string().max(80).required().label('descripcion'),
            precio: Joi.number().required().label('precio'),
            modelo: Joi.string().max(80).label('modelo'),
            existencia: Joi.number().required().label('existencia'),
        }
    },
    handler: async (request, reply) => {

        try {
            const {
                clave,
                descripcion,
                precio,
                modelo,
                existencia
            } = request.payload;

            const itemData = await Models.update(clave, descripcion, precio, modelo, existencia);

            reply(itemData);
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
            const itemData = await Models.get(clave);

            reply(itemData);
        }
        catch (err) {
            reply(err);
        }
    }
};

exports.list = {
    handler: async (request, reply) => {

        try {
            let itemData = await Models.list();

            reply(itemData);
        }
        catch (err) {
            reply(err);
        }
    }
};

exports.createRandomHash = {
    handler(request, reply) {
        return reply({
            type: 'item',
            hash: require('crypto').randomBytes(3).toString('hex')
        });
    }
};
