/**
 * Codeacademy Seed Helpers
 * - Small, readable datasets
 * - Generates Users + Applications with Tag subdocuments
 */

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

const appDescriptions = [
  "Decision Tracker",
  "Find My Phone",
  "Learn Piano",
  "Starbase Defender",
  "Notes",
  "Messaging App",
  "Email Client",
  "Workout Tracker",
  "Cooking Companion",
  "Delivery Dashboard",
];

const tagWords = [
  "html",
  "css",
  "javascript",
  "typescript",
  "node",
  "express",
  "mongodb",
  "mongoose",
  "react",
  "sql",
  "tailwind",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomFullName = () => `${pick(firstNames)} ${pick(lastNames)}`;

const randomUser = () => {
  const [first, last] = randomFullName().split(" ");
  return {
    first,
    last,
    age: Math.floor(Math.random() * 50) + 18,
  };
};

// ✅ Matches Tag schema: { tagBody } only
const randomTag = () => ({
  tagBody: pick(tagWords),
});

const randomTags = (count = 3) => {
  const results = [];
  for (let i = 0; i < count; i++) results.push(randomTag());
  return results;
};

const randomApplication = () => ({
  published: Math.random() > 0.5,
  buildSuccess: Math.random() > 0.5,
  description: pick(appDescriptions),
  tags: randomTags(3),
});

const randomApplications = (count = 10) => {
  const results = [];
  for (let i = 0; i < count; i++) results.push(randomApplication());
  return results;
};

module.exports = {
  randomUser,
  randomApplications,
};
