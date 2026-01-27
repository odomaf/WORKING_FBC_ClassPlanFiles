const router = require("express").Router();

// ? We are using hardcoded data here, where would our data usually come from? Remember - we haven't yet set up a database or Sequelize in our app.
const dishes = [
  {
    id: 1,
    dish_name: "Korean BBQ Tacos",
    description:
      "Marinated Korean-style beef served in warm tortillas with slaw and sesame sauce",
    has_nuts: false,
  },
  {
    id: 2,
    dish_name: "Chicken Shawarma Wraps",
    description:
      "Spiced chicken wrapped in warm pita with garlic sauce, lettuce, and tomato",
    has_nuts: false,
  },
  {
    id: 3,
    dish_name: "Loaded Elote (Mexican Street Corn)",
    description:
      "Grilled corn topped with mayo, cotija cheese, chili powder, and fresh lime",
    has_nuts: false,
  },
  {
    id: 4,
    dish_name: "Vietnamese Bánh Mì Sliders",
    description:
      "Mini baguette sandwiches with savory protein, pickled vegetables, and fresh herbs",
    has_nuts: false,
  },
  {
    id: 5,
    dish_name: "Spicy Garlic Noodles",
    description:
      "Wok-tossed noodles coated in a spicy garlic sauce and topped with green onions",
    has_nuts: false,
  },
  {
    id: 6,
    dish_name: "Fried Plantains with Honey Drizzle",
    description: "Crispy fried plantains finished with a light honey drizzle",
    has_nuts: false,
  },
  {
    id: 7,
    dish_name: "Churros with Chocolate Sauce",
    description:
      "Cinnamon-sugar churros served with warm chocolate dipping sauce",
    has_nuts: false,
  },
  {
    id: 8,
    dish_name: "West African Peanut Stew",
    description:
      "Rich, spicy stew made with peanuts, tomatoes, and tender vegetables",
    has_nuts: true,
  },
];

// ? get all dishes
router.get("/", async (req, res) => {
  res.render("all", { dishes });
});

// ? get one dish
router.get("/dish/:num", async (req, res) => {
  return res.render("dish", dishes[req.params.num - 1]);
});

module.exports = router;
