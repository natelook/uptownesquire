const express = require('express');
const next = require('next');
const path = require('path');
const url = require('url');
const bodyParser = require('body-parser');
const axios = require('axios');
const validateContactInput = require('./validation/contact');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const nextApp = next({ dir: '.', dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

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

  server.post('/contact/submit', (req, res) => {
    const { errors, isValid } = validateContactInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    const formData = {
      inbox_lead: {
        from_first: req.body.firstName,
        from_last: req.body.lastName,
        from_email: req.body.email,
        from_phone: req.body.phone,
        from_message: req.body.message,
        referring_url: 'http://localhost:3000/contact',
        from_source: 'Uptown Esquire Contact Page',
      },
      inbox_lead_token: 'U2rtMWhgL-MqhXbrL-If1w',
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    axios
      .post('http://app.lexicata.com/inbox_leads', formData, config)
      .then(form => res.json(form))
      .catch(err => console.log(err));
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Listening on http://localhost:${port}`);
  });
});
