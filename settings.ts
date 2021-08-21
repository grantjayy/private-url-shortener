import express from 'express';
import logging from './config/logging';

/** Create Server */
const app = express();
app.set('view engine', 'pug'); //Use PUGjs Template Engine
app.set('views', './views');

/** Sever Middleware */
app.use(express.static('public'));

//Loggers
app.use((req, res, next) => {
    logging.info(`METHOD: '${req.method}' - URL: '${req.url} - IP: ${req.socket.remoteAddress}`);

    req.on('finish', () => {
        logging.info(`METHOD: '${req.method}' - URL: '${req.url} - IP: ${req.socket.remoteAddress} - STATUS: ${res.statusCode}`);
    });

    next();
});
/** Parse the Body */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

export default app;
