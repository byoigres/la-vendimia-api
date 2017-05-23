'use strict';

const Mongoose = require('mongoose');

exports.create = (
    clave,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    rfc) => {

    const CustomerModel = Mongoose.model('customer');
    const customer = new CustomerModel();

    customer.set({
        clave,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        rfc
    });

    return customer.save();
};

exports.update = (
    clave,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    rfc) => {

    const CustomerModel = Mongoose.model('customer');
    return CustomerModel.findOneAndUpdate({
      clave
    },
    {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      rfc
    },
    {
      upsert:true
    });
};

exports.list = () => {

    const CustomerModel = Mongoose.model('customer');

    return CustomerModel
        .find({}, {
            _id: false,
            id: false,
            __v: false,
            updatedAt: false,
            createdAt: false
        })
        .exec();
};

exports.get = (clave) => {

    const CustomerModel = Mongoose.model('customer');

    return CustomerModel
        .findOne({
          clave
        }, {
            _id: false,
            id: false,
            __v: false,
            updatedAt: false,
            createdAt: false
        })
        .exec();
};
