// 🖥️ System Status Checker
// Change the values and operators below to test different outcomes

const systemLoad = 12;
const isUserPresent = true;
const isSystemOverloaded = (systemLoad > 75);

// 🧠 Your Task: Write conditional statements that evaluate combinations of true/false

// True                True
if(systemLoad > 50 && isUserPresent){
    console.log("True ✅ True ✅");
} else if(systemLoad < 25 ){
    // True and then False
    console.log("True ✅ False ❌");
} else if(!isUserPresent) {
    console.log("False ❌True ✅");
} else {
    console.log("False ❌False ❌");
}