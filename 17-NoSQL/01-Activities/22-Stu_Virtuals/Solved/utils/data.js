const firstNames = [
  "Ada",
  "Grace",
  "Alan",
  "Katherine",
  "Margaret",
  "Tim",
  "Linus",
];
const lastNames = [
  "Lovelace",
  "Hopper",
  "Turing",
  "Johnson",
  "Hamilton",
  "Berners-Lee",
  "Torvalds",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomFullName = () => `${pick(firstNames)} ${pick(lastNames)}`;

module.exports = { randomFullName };
