'use strict';

const Handlers = require('./handlers');

module.exports = [
    {
        method: 'POST',
        path: '/api/customer',
        config: Handlers.create
    },
    {
        method: 'GET',
        path: '/api/customer',
        config: Handlers.list
    }
];
