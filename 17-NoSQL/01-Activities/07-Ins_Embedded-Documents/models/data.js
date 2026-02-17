/**
 * Seed data for demonstrating relationships in MongoDB.
 *
 * We include examples of:
 * 1) "Reference-style" relationship (like foreign keys)
 * 2) One-to-one embedded document
 * 3) One-to-many embedded documents (array)
 *
 * Important note for students:
 * MongoDB is flexible — the same field can be an object in one document and an array in another.
 * That flexibility is powerful, but it can also complicate querying and validation.
 */
const seedData = [
  // 1) Reference-style relationship (similar concept to foreign keys)
  // One document references another by ID
  {
    department: "stationery",
    promotion_id: "backToSchool", // refers to the promotion document below
  },
  {
    promotion_id: "backToSchool",
    sale: "discount notebooks & pens",
    percentage_discount: 40,
  },

  // 2) One-to-one embedded document
  {
    department: "frozen",
    promotion: {
      promotion_id: "iceCream",
      sale: "discount frozen desserts",
      percentage_discount: 20,
    },
  },
  {
    department: "snacks",
    promotion: {
      promotion_id: "trailMix",
      sale: "free granola bar with purchase",
      percentage_discount: 50,
    },
  },

  // 3) One-to-many embedded documents (array of embedded documents)
  {
    department: "produce",
    promotion: [
      {
        promotion_id: "Mon",
        sale: "discount bananas",
        percentage_discount: 25,
      },
      {
        promotion_id: "Tue",
        sale: "half-price apples",
        percentage_discount: 50,
      },
      {
        promotion_id: "Wed",
        sale: "discount cherries",
        percentage_discount: 10,
      },
      {
        promotion_id: "Thu",
        sale: "free grapes",
        percentage_discount: 100,
      },
      {
        promotion_id: "Fri",
        sale: "5% off berries",
        percentage_discount: 5,
      },
      {
        promotion_id: "Sat",
        sale: "discount all fruit",
        percentage_discount: 30,
      },
      {
        promotion_id: "Sun",
        sale: "discount all fruit",
        percentage_discount: 12,
      },
    ],
  },
];

module.exports = seedData;
