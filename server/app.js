const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build/landing')));
app.use(express.static(path.resolve(__dirname, '..', 'build/blog')));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
/*
// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build/landing', 'index.html'));
});*/

// Always return the main index.html, so react-router render the route in the client
app.get('/blog', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build/blog', 'index.html'));
});

// Always return the main index.html, so react-router render the route in the client

const handler = (req, res) => res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));

const routes = ["/repair", "/repair/*"];

routes.forEach( route => app.get(route, handler) );

// Always return the main index.html, so react-router render the route in the client
app.get('/landing', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build/landing', 'index.html'));
});

module.exports = app;