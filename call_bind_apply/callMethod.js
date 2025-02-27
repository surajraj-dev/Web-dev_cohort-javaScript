
// 🍵*********************** call() Method Example *********************** 🍵
/*
    ->  used to immediate invoked specified 'this' context.
    ->  passed argument seperately  
*/




// 🏪 Function that serves chai to a customer
function serveChai(customerName) {
    // 🧑‍🍳 `this.name` refers to the waiter serving the chai
    console.log(`☕ ${this.name} jake ${customerName} ki table pe chai serve karo 🍵`);
}

// 👨‍🍳 Creating two waiter objects
const waiter1 = { name: "Rohit" };  // 🍽️ Waiter 1
const waiter2 = { name: "Amit" };   // 🍽️ Waiter 2

// 📞 Using call() to invoke serveChai function with `waiter1` as `this`
// serveChai.call(waiter1, "Suraj");
// ✅ Output: "☕ Rohit jake Suraj ki table pe chai serve karo 🍵"

// 📞 Using call() to invoke serveChai function with `waiter2` as `this`
// serveChai.call(waiter2, "Raj");
// ✅ Output: "☕ Amit jake Raj ki table pe chai serve karo 🍵"



// You are given a function cookDish(dishName, time), 
// which logs which chef is preparing a dish and how long it will take.
// Your task is to use the call() method to correctly bind the function 
// to different chefs and pass multiple arguments.


function cookDish(dishName, time) {
    console.log(`👨‍🍳 ${this.name} is preparing ${dishName} in ${time} minutes 🍽️`);
}

const chef1 = { name: "Vikas" };
const chef2 = { name: "Sanjeev" };

// Passing multiple arguments using call()
cookDish.call(chef1, "Paneer Butter Masala", 30);
cookDish.call(chef2, "Biryani", 45);
