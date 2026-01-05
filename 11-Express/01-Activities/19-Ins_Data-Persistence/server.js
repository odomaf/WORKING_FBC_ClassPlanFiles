const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const crypto = require('crypto');

const PORT = 3001;
const app = express();

const DB_DIR = path.join(__dirname, 'db');
const DB_FILE = path.join(DB_DIR, 'feedback.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Ensure db file exists
async function ensureDb() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
    await fs.access(DB_FILE);
  } catch {
    await fs.writeFile(DB_FILE, JSON.stringify([]), 'utf-8');
  }
}

async function readFeedback() {
  await ensureDb();
  const raw = await fs.readFile(DB_FILE, 'utf-8');
  return JSON.parse(raw);
}

async function writeFeedback(feedbackArray) {
  await fs.writeFile(DB_FILE, JSON.stringify(feedbackArray, null, 2), 'utf-8');
}

// GET: return saved feedback
app.get('/api/feedback', async (req, res) => {
  try {
    const feedback = await readFeedback();
    res.json({ status: 'success', total: feedback.length, body: feedback });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Failed to read feedback.' });
  }
});

// POST: add feedback + persist
app.post('/api/feedback', async (req, res) => {
  console.info(`${req.method} request received to add feedback`);

  const { product, review, username } = req.body;

  // Basic server-side validation
  if (
    typeof product !== 'string' ||
    typeof review !== 'string' ||
    typeof username !== 'string' ||
    !product.trim() ||
    !review.trim() ||
    !username.trim()
  ) {
    return res.status(400).json({
      status: 'error',
      message: 'product, review, and username are required.',
    });
  }

  const newEntry = {
    id: crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString('hex'),
    product: product.trim(),
    review: review.trim(),
    username: username.trim(),
    upvotes: Math.floor(Math.random() * 100),
    createdAt: new Date().toISOString(),
  };

  try {
    const feedback = await readFeedback();
    feedback.push(newEntry);
    await writeFeedback(feedback);

    res.status(201).json({ status: 'success', body: newEntry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Failed to save feedback.' });
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
