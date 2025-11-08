// 🐶 Selected pet name — you can change this value to test different outcomes
const chosenPet = "Luna";

// 🏠 Shelter object containing available pets and a built-in contact method
const shelter = {
  dogs: ["Max", "Cooper", "Daisy", "Spot"],
  cats: ["Luna", "Mittens", "Cleo", "Nala"],
  contactInfo: function () {
    console.log("📧 Contact us at hello@adoptme.org to schedule a visit!");
  }
};

// 🐕 Function to display a message if the chosen pet is a dog
const showDogMessage = function () {
  console.log(`🎉 Great news! ${chosenPet} the dog is available for adoption!`);
  shelter.contactInfo();
};

// 🐈 Function to display a message if the chosen pet is a cat
const showCatMessage = function () {
  console.log(`🎉 Great news! ${chosenPet} the cat is available for adoption!`);
  shelter.contactInfo();
};

// 🧭 Determine which array contains the chosen pet
if (shelter.dogs.includes(chosenPet)) {
  showDogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  showCatMessage();
} else {
  console.log("😿 Sorry, that pet isn’t currently available.");
  console.log(`🐾 Featured pets: ${shelter.dogs[0]} the dog or ${shelter.cats[0]} the cat!`);
}
