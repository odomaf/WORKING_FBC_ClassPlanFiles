const express = require('express');

const app = express();
const PORT = 3001;

// Custom middleware: request logger (teaches next())
const requestLogger = (req, res, next) => {
  const cyan = '\x1b[36m%s\x1b[0m';
  const yellow = '\x1b[33m%s\x1b[0m';

  const startedAt = Date.now();
  const timestamp = new Date().toISOString();

  // Log when request starts
  console.log(cyan, `[${timestamp}] ${req.method} ${req.path}`);

  // After the response finishes, log status + duration
  res.on('finish', () => {
    const durationMs = Date.now() - startedAt;
    const msg = `[${timestamp}] ${req.method} ${req.path} -> ${res.statusCode} (${durationMs}ms)`;

    // Highlight slower requests
    if (durationMs > 200) {
      console.log(yellow, msg);
    } else {
      console.log(cyan, msg);
    }
  });

  next();
};

app.use(requestLogger);

app.get('/', (req, res) => res.json({ message: 'Study Boost Board API is live ✅' }));

app.post('/api/hacks', (req, res) =>
  res.status(201).json({ message: 'Created a new study hack ✍️' })
);

app.put('/api/hacks/:id', (req, res) =>
  res.json({ message: `Updated hack ${req.params.id} 🛠️` })
);

app.delete('/api/hacks/:id', (req, res) =>
  res.json({ message: `Deleted hack ${req.params.id} 🗑️` })
);

app.patch('/api/hacks/:id', (req, res) =>
  res.json({ message: `Partially updated hack ${req.params.id} 🧩` })
);

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🚀`)
);
