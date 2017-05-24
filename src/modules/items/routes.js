'use strict';

const Handlers = require('./handlers');

module.exports = [
    {
        method: 'PUT',
        path: '/api/item',
        config: Handlers.create
    },
    {
        method: 'POST',
        path: '/api/item',
        config: Handlers.update
    },
    {
        method: 'GET',
        path: '/api/item',
        config: Handlers.list
    },
    {
        method: 'GET',
        path: '/api/item/{clave}',
        config: Handlers.get
    },
    {
        method: 'GET',
        path: '/api/item/hash',
        config: Handlers.createRandomHash
    }
];
