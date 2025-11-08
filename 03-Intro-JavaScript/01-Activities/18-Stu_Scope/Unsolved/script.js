// 📣 `broadcast` is in the global scope and available to both functions below
const broadcast = "Broadcast";

const justBroadcast = function () {
  console.log(`${broadcast}, ${broadcast}`);
  return;
};

const broadcastToAll = function () {

  // TODO: The variable 'broadcast' should return "Broadcast to all users"
  //let broadcast = "Radio";
  console.log(`${broadcast} to all users!`);
  return;
};

justBroadcast();
broadcastToAll();

// 🏷️ Local variables are only available inside their own functions
const sayFrontend = function () {
  const category = "Frontend";
  console.log(category);
};

const sayBackend = function () {
  const category = "Backend";
  console.log(`and ${category} and`);
  return;
};

// ⚠️ Avoid declaring the same variable name in both global and local scope
// Keep this global
const opsTeam = "DevOps";

// Use the global variable inside the function
const sayOps = function () {
  console.log(`${opsTeam}! OH MY!`);
  return;
};

sayFrontend();
sayBackend();
sayOps();

// 🔁 Declaring data in the outer function makes it available to inner functions (closure)

// TODO: The variable 'prefix' should be declared once in the local scope
var prefix = "Heads down"; //Global 

const scheduleAnnouncement = function () {
  const prefix = "Heads up";//Local
  console.log(`${prefix},`);

  const sendDetail = function () {
    console.log(`${prefix}: maintenance at 3 PM.`);
  };

  sendDetail();
};

scheduleAnnouncement();
