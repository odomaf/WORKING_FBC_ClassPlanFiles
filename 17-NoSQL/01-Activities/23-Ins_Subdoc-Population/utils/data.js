const firstNames = [
  "Ada",
  "Grace",
  "Alan",
  "Katherine",
  "Margaret",
  "Linus",
  "Tim",
];
const lastNames = [
  "Lovelace",
  "Hopper",
  "Turing",
  "Johnson",
  "Hamilton",
  "Torvalds",
  "Berners-Lee",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomFullName = () => `${pick(firstNames)} ${pick(lastNames)}`;

const randomPostText = () => {
  const starters = [
    "Today I learned that MongoDB documents can embed and reference other documents.",
    "Virtuals are computed properties that do not persist in the database.",
    "Populate lets us load referenced documents like a “join” for MongoDB.",
    "Mongoose schemas help enforce structure in a NoSQL database.",
  ];
  return pick(starters) + " " + pick(starters);
};

module.exports = {
  randomFullName,
  randomPostText,
};
