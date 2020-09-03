const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/greet/:name', (req, res) => {
    const greeting = process.env.GREETING || 'Hello'
    res.status(200).send(`<h1>${greeting} ${req.params.name}</h1>`)
})

server.use('/api', apiRouter);

module.exports = server;
