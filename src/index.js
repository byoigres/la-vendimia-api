'use strict';
const Composer = require('./composer');

Composer((composerErr, server) => {

    if (composerErr) {
        throw composerErr;
    }

    server.start()
        .then(() => server.log(['la-vendimia-api', 'info'], `Server started at ${server.info.uri}`))
        .catch((err) => server.log(['la-vendimia-api', 'info'], err));
});
