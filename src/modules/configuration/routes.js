'use strict';

const Handlers = require('./handlers');

module.exports = [
    {
        method: 'PUT',
        path: '/api/configuration',
        config: Handlers.create
    },
    {
        method: 'POST',
        path: '/api/configuration',
        config: Handlers.update
    },
    {
        method: 'GET',
        path: '/api/configuration',
        config: Handlers.get
    }
];
