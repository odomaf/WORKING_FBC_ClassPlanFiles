const router = require('express').Router();

const requestsRouter = require('./requests');
const hacksRouter = require('./hacks');

router.use('/requests', requestsRouter);
router.use('/hacks', hacksRouter);

module.exports = router;
