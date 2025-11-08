// 🌐 By default, "this" refers to the global object.
// In a browser environment, that's the Window object.

// Logs the global context (e.g., Window or global object in Node.js)
console.log(this);

// 📱 When "this" is used inside an object, it refers to that specific object instance.
const smartDevice = {
  name: "Gecko Dot",
  brand: "Bamazon",
  isOnline: true,
  firmwareVersion: "3.2.5",
  
  logDetails: function () {
    console.log(`📦 Device Name: ${this.name}`);
    console.log(`🏷️ Brand: ${this.brand}`);
    console.log(`🧠 Firmware Version: ${this.firmwareVersion}`);
  },

  checkStatus: function () {
    if (this.isOnline) {
      console.log(`✅ ${this.name} is currently online and ready to respond!`);
    } else {
      console.log(`⚠️ ${this.name} appears to be offline.`);
    }
  }
};

// 🧩 Calling the object’s methods
smartDevice.logDetails();
smartDevice.checkStatus();
