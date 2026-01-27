const router = require("express").Router();
const Dish = require("../../models/Dish");

// ? route to create/add a dish using async/await
router.post("/", async (req, res) => {
  try {
    const dishData = await Dish.create({
      dish_name: req.body.dish_name.trim(),
      description: req.body.description.trim(),
      chef_name: req.body.chef_name.trim(),
      has_nuts: req.body.has_nuts,
    });
    // ? if the dish is successfully created, the new response will be returned as json
    res.status(200).json(dishData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: Comment on the route below

router.put("/:id", async (req, res) => {
  try {
    const dishData = await Dish.update(
      {
        dish_name: req.body.dish_name.trim(), //TODO: What does trim() do here?
        description: req.body.description.trim(),
        chef_name: req.body.chef_name.trim(),
        has_nuts: req.body.has_nuts,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
    // TODO: Comment on the response below
    res.status(200).json(dishData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
