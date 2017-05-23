'use strict';

const Joi = require('joi');
const Models = require('./models');

exports.create = {
    validate: {
        payload: {
            financiamiento: Joi.number().required().label('financiamiento'),
            enganche: Joi.number().required().label('enganche'),
            plazo: Joi.number().required().label('plazo')
        }
    },
    handler: async (request, reply) => {

        try {
            const {
                financiamiento,
                enganche,
                plazo
            } = request.payload;

            const configurationData = await Models.create(financiamiento, enganche, plazo);

            reply(configurationData);
        }
        catch (err) {
            reply(err);
        }
    }
};

exports.update = {
    validate: {
        payload: {
            financiamiento: Joi.number().required().label('financiamiento'),
            enganche: Joi.number().required().label('enganche'),
            plazo: Joi.number().required().label('plazo')
        }
    },
    handler: async (request, reply) => {

        try {
            const {
              financiamiento,
              enganche,
              plazo
            } = request.payload;

            await Models.update(financiamiento, enganche, plazo);
            let configurationData = await Models.get();

            reply(configurationData);
        }
        catch (err) {
            reply(err);
        }
    }
};

exports.get = {
    handler: async (request, reply) => {

        try {
            const configurationData = await Models.get();

            reply(configurationData);
        }
        catch (err) {
            reply(err);
        }
    }
};
