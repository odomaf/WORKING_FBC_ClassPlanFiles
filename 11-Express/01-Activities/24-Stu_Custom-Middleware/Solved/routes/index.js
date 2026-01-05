const router = require('express').Router();

const requestsRouter = require('./feedback');
const hacksRouter = require('./tips');

router.use('/hacks', hacksRouter);
router.use('/requests', requestsRouter);

module.exports = router;
