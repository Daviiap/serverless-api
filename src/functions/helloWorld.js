const serverless = require('serverless-http');

const app = require('../app');

app.get('/', function (req, res) {
  res.status(200).json({ status: 'ok' });
});

module.exports.handler = serverless(app);
