const router = require('express').Router();
const battleRoutes = require('./battle-routes');
const toolRoutes = require('./tool-routes.js');

router.use('/battle', battleRoutes);
router.use('/tool', toolRoutes);

module.exports = router;
