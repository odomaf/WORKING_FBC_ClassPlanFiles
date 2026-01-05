const router = require('express').Router();

// Import our route modules
const requestsRouter = require('./feedback');
const hacksRouter = require('./tips');

// Mount routes so they become:
// /api/hacks
// /api/requests
router.use('/hacks', hacksRouter);
router.use('/requests', requestsRouter);

module.exports = router;
