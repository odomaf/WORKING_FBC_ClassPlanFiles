const router = require('express').Router();
const { Tag, MenuItem } = require('../../models');

// GET /api/tags
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Item data
});

// GET /api/tags/:id
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

// POST /api/tags
router.post('/', async (req, res) => {
  // create a new tag
});

// PUT /api/tags/:id
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
});

// DELETE /api/tags/:id
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
