const requests = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

requests.get('/', (req, res) => {
  console.info(`${req.method} request received for requests`);
  readFromFile('./db/requests.json').then((data) => res.json(JSON.parse(data)));
});

requests.post('/', (req, res) => {
  console.info(`${req.method} request received to submit request`);

  const { email, topic, message } = req.body;

  if (!email || !topic || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'email, topic, and message are required.',
    });
  }

  const newRequest = {
    email,
    topic,
    message,
    request_id: uuid(),
  };

  readAndAppend(newRequest, './db/requests.json');

  return res.status(201).json({
    status: 'success',
    body: newRequest,
  });
});

module.exports = requests;
