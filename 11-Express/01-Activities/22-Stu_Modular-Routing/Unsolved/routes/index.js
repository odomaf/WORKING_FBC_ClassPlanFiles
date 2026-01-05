const router = require('express').Router();

// ✅ These route modules are already created for you
const requestsRouter = require('./feedback');
const hacksRouter = require('./tips');

// TODO: Wire up (mount) the routers so the following endpoints work:
// - GET /api/hacks
// - POST /api/hacks
// - GET /api/requests
// - POST /api/requests

// router.use('/hacks', hacksRouter);
// router.use('/requests', requestsRouter);

module.exports = router;
