'use strict';

const Mongoose = require('mongoose');

exports.create = (
    clave,
    descripcion,
    precio,
    modelo,
    existencia
) => {

    const ItemModel = Mongoose.model('item');
    const item = new ItemModel();

    item.set({
        clave,
        descripcion,
        precio,
        modelo,
        existencia
    });

    return item.save();
};

exports.update = (
    clave,
    descripcion,
    precio,
    modelo,
    existencia
) => {

    const ItemModel = Mongoose.model('item');
    return ItemModel.findOneAndUpdate({ clave }, {
        descripcion,
        precio,
        modelo,
        existencia
    }, {
        upsert: true
    });
};

exports.list = () => {

    const ItemModel = Mongoose.model('item');

    return ItemModel
        .find({}, {
            __v: false,
            updatedAt: false,
            createdAt: false
        })
        .exec();
};

exports.get = (clave) => {

    const ItemModel = Mongoose.model('item');

    return ItemModel
        .findOne({ clave }, {
            _id: false,
            id: false,
            __v: false,
            updatedAt: false,
            createdAt: false
        })
        .exec();
};
