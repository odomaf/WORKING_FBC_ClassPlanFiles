const creators = [
  "Ada",
  "Grace",
  "Alan",
  "Katherine",
  "Margaret",
  "Linus",
  "Tim",
];

const videoTopics = [
  "How to disagree with someone (respectfully)",
  "iPhone review (honest)",
  "Algorithm walkthrough (step-by-step)",
  "Mini video essay on game history",
  "How to ship your first full-stack app",
  "Learn Express routing in 10 minutes",
  "Hello world (but make it useful)",
  "Apology video (classic)",
  "Startup pitch submission",
];

const possibleResponses = [
  "I disagree, here’s why…",
  "I tried your approach—these were my results.",
  "This was super helpful, thank you!",
  "Can you share the repo?",
  "Replying with my own video response 🎥",
  "Like and subscribe (I had to 😂)",
];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomFullName = () => `${pick(creators)} ${pick(creators)}`;

const makeResponses = (count = 3) => {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push({
      responseBody: pick(possibleResponses),
      username: randomFullName(),
    });
  }
  return out;
};

const makeVideos = (count = 8) => {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push({
      published: Math.random() > 0.5,
      advertiserFriendly: Math.random() > 0.25,
      description: pick(videoTopics),
      responses: makeResponses(3),
    });
  }
  return out;
};

module.exports = { randomFullName, makeVideos };
