const firstNames = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Abaan",
  "Abbas",
  "Abdul",
  "Smith",
  "Jones",
  "Xander",
  "Jared",
  "Courtney",
  "Gillian",
  "Clark",
  "Grace",
  "Kelsey",
  "Tamar",
  "Alex",
  "Mark",
  "Sarah",
  "Nathaniel",
  "Parker",
];

const commentPhrases = [
  "Decision Trackers are awesome",
  "Find My Phone is a useful app",
  "Learn Piano is not great for learning piano",
  "Starbase Defender is a great game",
  "Tower Defense is okay",
  "Monopoly Money is better than real money IMO",
  "Movie trailers are the best parts condensed",
  "Hello world, this is a comment",
  "Social media can be a big waste of time",
  "Notes is my most used app",
  "Messages is open on my computer 24/7",
  "Email is open on my computer",
  "Compass is never opened",
  "Firefox is great for privacy",
];

const loremWords = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "curabitur",
  "vel",
  "hendrerit",
  "libero",
  "eleifend",
  "blandit",
  "nunc",
  "ornare",
  "odio",
  "ut",
  "orci",
  "gravida",
  "imperdiet",
  "nullam",
  "purus",
  "lacinia",
  "a",
  "pretium",
  "quis",
];

const randIndex = (arr) => Math.floor(Math.random() * arr.length);
const pickOne = (arr) => arr[randIndex(arr)];

const makeUsername = () => pickOne(firstNames);
const makeFullName = () => `${pickOne(firstNames)} ${pickOne(firstNames)}`;

const makeSentence = (wordCount = 10) => {
  const words = [];
  for (let i = 0; i < wordCount; i++) words.push(pickOne(loremWords));
  return words.join(" ");
};

const makeComments = (count = 10) => {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push({
      text: pickOne(commentPhrases),
      username: makeUsername(),
    });
  }
  return out;
};

module.exports = {
  randIndex,
  pickOne,
  makeUsername,
  makeFullName,
  makeSentence,
  makeComments,
};
