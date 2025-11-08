// 🌐 In the global scope, "this" refers to the global object (Window in browsers, global in Node.js)
console.log(this);

// 💬 A regular function — here, "this" refers to the global object (not tied to any specific object)
const greetThis = function () {
  console.log(`👋 Inside this function, "this" is:`, this);
};

// 👶 Example 1: "this" refers to the current object (employee)
const employee = {
  name: "Jordan",
  yearsAtCompany: 3,
  celebrateAnniversary: function () {
    console.log(`🎉 Congrats ${this.name}! In 10 years, you'll celebrate ${this.yearsAtCompany + 10} years at TechNova!`);
  }
};

// 💰 Example 2: "this" refers to the nested object (portfolio)
const startup = {
  name: "SkyLab Ventures",
  portfolio: {
    seedInvestment: 100000,
    calculateGrowth: function () {
      console.log(`📈 Projected Growth: $${this.seedInvestment * 1.25}`);
    }
  }
};

// ▶️ Call the standalone function
greetThis();

// ▶️ Call object methods to see how "this" changes based on context
employee.celebrateAnniversary();
startup.portfolio.calculateGrowth();
