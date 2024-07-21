import express from 'express';
import bodyParser from 'body-parser';

export const createServer = (client) => {
    const app = express()
    app.use(bodyParser.json())
    return app
}