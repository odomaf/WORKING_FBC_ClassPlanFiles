const express = require('express');
const path = require('path');

// Helper function for generating unique ids
const uuid = require('./helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// ✅ View route: homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// ✅ View route: help page (was /feedback)
app.get('/help', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/help.html'))
);

// ============================
// ✅ API: STUDY HACKS (was tips)
// ============================

// GET all hacks
app.get('/api/hacks', (req, res) => {
  console.info(`${req.method} request received for hacks`);
  readFromFile('./db/hacks.json').then((data) => res.json(JSON.parse(data)));
});

// POST a new hack
app.post('/api/hacks', (req, res) => {
  console.info(`${req.method} request received to add a hack`);

  const { username, category, hack } = req.body;

  // Basic validation
  if (!username || !hack) {
    return res.status(400).json({
      status: 'error',
      message: 'username and hack are required.',
    });
  }

  const newHack = {
    username: username.trim(),
    category: (category || 'General').trim(),
    hack: hack.trim(),
    hack_id: uuid(),
  };

  readAndAppend(newHack, './db/hacks.json');

  return res.status(201).json({
    status: 'success',
    body: newHack,
  });
});

// ================================
// ✅ API: HELP REQUESTS (was feedback)
// ================================

// GET all requests
app.get('/api/requests', (req, res) => {
  console.info(`${req.method} request received for requests`);
  readFromFile('./db/requests.json').then((data) => res.json(JSON.parse(data)));
});

// POST a new request
app.post('/api/requests', (req, res) => {
  console.info(`${req.method} request received to submit a request`);

  const { email, topic, message } = req.body;

  // Basic validation
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

  readAndAppend(newRequest, './db/requests.json');

  return res.status(201).json({
    status: 'success',
    body: newRequest,
  });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
