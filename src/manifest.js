'use strict';
const Confidence = require('confidence');
const MongodbUri = require('mongodb-uri');

const criteria = {
    env: process.env.NODE_ENV
};

const manifest = {
    $meta: 'La Vendimia API Manifest',
    server: {
        debug: {
            log: ['error'],
            request: ['error']
        }
    },
    connections: [{
        host: process.env.API_HOST,
        port: process.env.API_PORT,
        labels: ['la-vendimia-api'],
        routes: {
            validate: {
                options: {
                    abortEarly: false
                },
                failAction: function (request, reply, source, error) {

                    if (request.i18n && error && error.data && error.data.isJoi) {

                        error.data.details.forEach((item) => {

                            const field = item.context.key;

                            item.message = request.i18n.__(`${field}.${item.type}`);
                        });

                        return reply(error);
                    }

                    reply();
                }
            },
            cors: {
              origin: ['*'],
              additionalHeaders: ['cache-control', 'x-requested-with']
            }
        }
    }],
    registrations: [
        {
            plugin: {
                register: 'good',
                options: {
                    reporters: {
                        console: [{
                            module: 'good-console'
                        }, 'stdout']
                    }
                }
            }
        },
        {
            plugin: './plugins/context'
        },
        {
            plugin: {
                register: './plugins/mongoose',
                options: {
                    uri: MongodbUri.format({
                        hosts: [{
                            host: process.env.MONGO_HOST,
                            port: process.env.MONGO_PORT
                        }],
                        database: 'titorline'
                    })
                }
            }
        },
        {
            plugin: './modules/customers'
        }
    ]
};

const store = new Confidence.Store(manifest);

exports.get = (key) => store.get(key, criteria);

exports.meta = (key) => store.meta(key, criteria);
