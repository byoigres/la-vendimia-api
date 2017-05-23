'use strict';

const Handlers = require('./handlers');

module.exports = [
    {
        method: 'PUT',
        path: '/api/customer',
        config: Handlers.create
    },
    {
        method: 'POST',
        path: '/api/customer',
        config: Handlers.update
    },
    {
        method: 'GET',
        path: '/api/customer',
        config: Handlers.list
    },
    {
        method: 'GET',
        path: '/api/customer/{clave}',
        config: Handlers.get
    },
    {
        method: 'GET',
        path: '/api/customer/hash',
        config: Handlers.createRandomHash
    }
];
