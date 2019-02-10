const express = require('express');
const next = require('next');
const path = require('path');
const url = require('url');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dir: '.', dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.use(
    '/static',
    express.static(path.join(__dirname, 'static'), {
      maxAge: dev ? '0' : '365d',
    }),
  );

  server.get('/post/:slug', (req, res) => {
    const actualPage = '/post';
    const queryParams = { slug: req.params.slug, apiRoute: 'post' };
    nextApp.render(req, res, actualPage, queryParams);
  });

  server.get('/attorney/:slug', (req, res) => {
    const actualPage = '/attorney';
    const queryParams = { slug: req.params.slug, apiRoute: 'attorney' };
    nextApp.render(req, res, actualPage, queryParams);
  });

  server.get('/page/:slug', (req, res) => {
    const actualPage = '/post';
    const queryParams = { slug: req.params.slug, apiRoute: 'page' };
    nextApp.render(req, res, actualPage, queryParams);
  });

  server.get('category/:slug', (req, res) => {
    const actualPage = '/category';
    const queryParams = { slug: req.params.slug };
    nextApp.renger(req, res, actualPage, queryParams);
  });

  server.get('/_preview/:id/:wponce', (req, res) => {
    const actualPage = '/preview';
    const queryParams = { id: req.params.id, wponce: req.params.wponce };
    nextApp.render(req, res, actualPage, queryParams);
  });

  server.get('*', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    nextHandler(req, res, parsedUrl);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log('Listening on http://localhost:${port}');
  });
});
