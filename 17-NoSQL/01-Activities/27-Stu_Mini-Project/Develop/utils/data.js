const firstNames = [
  "Ada",
  "Grace",
  "Alan",
  "Katherine",
  "Margaret",
  "Linus",
  "Tim",
  "Roger",
];
const lastNames = [
  "Lovelace",
  "Hopper",
  "Turing",
  "Johnson",
  "Hamilton",
  "Torvalds",
  "Berners-Lee",
  "Le",
];

const checkpointNames = [
  "API Basics",
  "MongoDB Queries",
  "Mongoose Models",
  "Aggregation Pipelines",
  "CRUD Review",
  "Debugging Practice",
  "Routes + Controllers",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomName = () => `${pick(firstNames)} ${pick(lastNames)}`;

const randomAssignments = (count = 8) => {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push({
      assignmentName: pick(checkpointNames),
      score: Math.floor(Math.random() * (100 - 70 + 1) + 70),
    });
  }
  return results;
};

module.exports = { randomName, randomAssignments };
