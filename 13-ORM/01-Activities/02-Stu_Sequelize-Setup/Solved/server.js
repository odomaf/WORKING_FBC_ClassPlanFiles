const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route to confirm server is running
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Library DB server is running 🚀',
  });
});

// Start server only after database connection is successful
sequelize.sync().then(() => {
  console.log('✅ Database connected successfully');
  console.log(`🌐 Server listening on http://localhost:${PORT}`);

  app.listen(PORT);
});
