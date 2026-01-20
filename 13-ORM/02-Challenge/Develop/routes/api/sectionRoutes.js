const router = require('express').Router();
const { MenuSection, MenuItem } = require('../../models');

// GET /api/sections
router.get('/', async (req, res) => {
  // get all sections
  // be sure to include its associated Item data
});

// GET /api/sections/:id
router.get('/:id', async (req, res) => {
  // get one section by `id` value
  // be sure to include its associated Item data
});

// POST /api/sections
router.post('/', async (req, res) => {
  // create a new section
});

// PUT /api/sections/:id
router.put('/:id', async (req, res) => {
  // update section data by `id` value
});

// DELETE /api/sections/:id
router.delete('/:id', async (req, res) => {
  // delete one section by its `id` value
});

module.exports = router;
