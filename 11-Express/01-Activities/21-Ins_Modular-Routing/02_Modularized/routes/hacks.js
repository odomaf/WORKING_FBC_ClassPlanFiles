const hacks = require('express').Router();
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

hacks.get('/', (req, res) => {
  console.info(`${req.method} request received for hacks`);
  readFromFile('./db/hacks.json').then((data) => res.json(JSON.parse(data)));
});

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
    username,
    category: category || 'General',
    hack,
    hack_id: uuid(),
  };

  readAndAppend(newHack, './db/hacks.json');

  return res.status(201).json({
    status: 'success',
    body: newHack,
  });
});

module.exports = hacks;
