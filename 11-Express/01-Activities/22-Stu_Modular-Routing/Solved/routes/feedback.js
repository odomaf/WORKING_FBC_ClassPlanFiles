const requests = require('express').Router();
const uuid = require('../helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all help requests
requests.get('/', (req, res) => {
  console.info(`${req.method} request received for requests`);
  readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting a help request
requests.post('/', (req, res) => {
  console.info(`${req.method} request received to submit a request`);

  const { email, topic, message } = req.body;

  if (!email || !topic || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'email, topic, and message are required.',
    });
  }

  const newRequest = {
    email: email.trim(),
    topic: topic.trim(),
    message: message.trim(),
    request_id: uuid(),
  };

  readAndAppend(newRequest, './db/feedback.json');

  return res.status(201).json({
    status: 'success',
    body: newRequest,
  });
});

module.exports = requests;
