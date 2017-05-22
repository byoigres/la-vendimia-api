'use strict';

exports.register = (server, options, next) => {

    server.ext('onPreResponse', (request, reply) => {

        const { response } = request;

        if (response.isBoom) {
            if (response.data === null) {
                return reply.continue();
            }

            if (typeof response.data === 'string') {
                response.output.payload = {
                    error: {
                        message: response.data
                    }
                };
            }
            else {
                const messages = {};

                Object.keys(response.data).map((item) => {

                    messages[item] = response.data[item];
                });

                response.output.payload = {
                    error: {
                        messages
                    }
                };
            }
        }

        return reply.continue();
    });

    next();
};

exports.register.attributes = {
    name: 'plugins/context'
};
