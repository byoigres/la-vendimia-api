'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

exports.register = (plugin, options, next) => {

    const mongoose = Mongoose.connect(options.uri);

    mongoose.connection.on('error', (e) => plugin.log(['mongoose-models', 'error'], e));
    mongoose.connection.once('open', () => plugin.log(['mongoose-models', 'info'], 'Mongodb connection established.'));

    const models = {};
    const schemas = {};

    // Models

    schemas.customer = new Schema({
        clave: String,
        nombre: String,
        apellidoPaterno: String,
        apellidoMaterno: String,
        rfc: String,
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    });

    schemas.item = new Schema({
        descripcion: String,
        modelo: String,
        precio: Number
    })

    // Models
    models.Event = mongoose.model('customer', schemas.customer);

    // Schema options
    Object.keys(schemas).forEach((key) => {

        schemas[key].set('toJSON', {
            virtuals: true
        });

        schemas[key].options.toJSON.transform = (doc, ret) => {

            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        };
    });

    plugin.log(['mongoose-models', 'info'], 'Mongoose models added');

    return next();
};

exports.register.attributes = {
    name: 'plugins/mongoose'
};
