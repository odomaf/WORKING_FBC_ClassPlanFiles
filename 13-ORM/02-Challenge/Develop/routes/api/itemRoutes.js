const router = require('express').Router();
const { MenuItem, MenuSection, Tag, MenuItemTag } = require('../../models');

// GET /api/items
router.get('/', async (req, res) => {
  // find all items
  // be sure to include its associated Sections and Tags
});

// GET /api/items/:id
router.get('/:id', async (req, res) => {
  // find one item by its `id` value
  // be sure to include its associated Section and Tags
});

// POST /api/items
// Body can include optional: tagIds: [1,2,3]
router.post('/', async (req, res) => {
  // create a new item
});

// PUT /api/items/:id
router.put('/:id', async (req, res) => {
  // update an item by its `id` value
});

// DELETE /api/items/:id
router.delete('/:id', async (req, res) => {
  // delete a item by its `id` value
});

module.exports = router;
