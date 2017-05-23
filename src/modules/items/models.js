'use strict';

const Mongoose = require('mongoose');

exports.create = (
  nombre,
  apellidoPaterno,
  apellidoMaterno,
  rfc) => {

    const CustomerModel = Mongoose.model('customer');
    const customer = new CustomerModel();

    customer.set({
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        rfc
    });

    return customer.save();
};

exports.list = () => {

    const CustomerModel = Mongoose.model('customer');

    return CustomerModel
        .find({}, {
            __v: false,
            updatedAt: false,
            createdAt: false
        })
        .exec();
};
