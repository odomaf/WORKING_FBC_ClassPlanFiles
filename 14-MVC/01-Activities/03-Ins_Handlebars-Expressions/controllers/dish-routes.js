const router = require("express").Router();

// ? Temporary, hardcoded data used to demonstrate
// ? how Express routes pass data into Handlebars views.
// ? This data represents the Street Eats Night menu.
// ? In later activities, this will be replaced with database data.
const dishes = [
  {
    dish_name: "Korean BBQ Tacos",
    description:
      "Marinated Korean-style beef served in warm tortillas with slaw and sesame sauce",
  },
  {
    dish_name: "Chicken Shawarma Wraps",
    description:
      "Spiced chicken wrapped in warm pita with garlic sauce, lettuce, and tomato",
  },
  {
    dish_name: "Loaded Elote (Mexican Street Corn)",
    description:
      "Grilled corn topped with mayo, cotija cheese, chili powder, and fresh lime",
  },
  {
    dish_name: "Vietnamese Bánh Mì Sliders",
    description:
      "Mini baguette sandwiches with savory protein, pickled vegetables, and fresh herbs",
  },
  {
    dish_name: "Spicy Garlic Noodles",
    description:
      "Wok-tossed noodles coated in a spicy garlic sauce and topped with green onions",
  },
  {
    dish_name: "Fried Plantains with Honey Drizzle",
    description: "Crispy fried plantains finished with a light honey drizzle",
  },
  {
    dish_name: "Churros with Chocolate Sauce",
    description:
      "Cinnamon-sugar churros served with warm chocolate dipping sauce",
  },
];

// Route: GET /
// ? Handles requests to the home page.
// ? Renders a view that displays the full Street Eats Night menu.
router.get("/", async (req, res) => {
  res.render("all", { dishes });
});

// Route: GET /dish/:num
// ? Handles requests for a single dish.
// ? Uses the route parameter to select one item
// ? from the Street Eats Night menu.
router.get("/dish/:num", async (req, res) => {
  // Render the "dish" view and pass in a single dish
  // based on its position in the menu.
  return res.render("dish", dishes[req.params.num - 1]);
});

module.exports = router;
