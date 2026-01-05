const hacks = require('express').Router();
const uuid = require('../helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all study hacks
hacks.get('/', (req, res) => {
  console.info(`${req.method} request received for hacks`);
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for adding a new study hack
hacks.post('/', (req, res) => {
  console.info(`${req.method} request received to add a hack`);

  const { username, category, hack } = req.body;

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

  readAndAppend(newHack, './db/tips.json');

  return res.status(201).json({
    status: 'success',
    body: newHack,
  });
});

module.exports = hacks;
