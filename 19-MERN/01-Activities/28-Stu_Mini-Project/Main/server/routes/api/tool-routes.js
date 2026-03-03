const router = require('express').Router();
const { getAllTool } = require('../../controllers/tool-controller');

router.route('/').get(getAllTool);

module.exports = router;
