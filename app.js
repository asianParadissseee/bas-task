import express from 'express';
import bodyParser from 'body-parser';
import {urlRoutes} from './routes/app-router.js';

export const createServer = (client) => {
    const app = express();

    app.use(bodyParser.json());

    app.use('/shorten', urlRoutes(client));

    return app;
};
