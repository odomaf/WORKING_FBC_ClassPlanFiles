const router = require('express').Router();
const {
  getAllBattles,
  createBattle,
  getBattle,
  createVote,
} = require('../../controllers/battle-controller');

router.route('/').get(getAllBattles);
router.route('/').post(createBattle);
router.route('/:id').get(getBattle);
router.route('/:id').put(createVote);

module.exports = router;
