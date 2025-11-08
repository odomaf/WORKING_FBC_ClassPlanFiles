// 🍔 Object representing a customer's food order
const order = {
  item: "Veggie Burger",
  extras: ["Avocado", "Sweet Potato Fries"],
  isReady: false
};

// Logs the entire object
console.log(order);

// 🧾 Using dot and bracket notation to check order status
if (order.isReady) {
  console.log(`✅ Order ready: ${order.item} with ${order.extras.join(", ")}.`);
} else {
  console.log(`⏳ Order still in progress: ${order["item"]} with ${order["extras"].join(", ")}.`);
}
