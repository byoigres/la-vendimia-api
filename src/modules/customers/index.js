'use strict';

exports.register = (server, options, next) => {

    server.route(require('./routes'));

    next();
};

exports.register.attributes = {
    name: 'modules/customers'
};
