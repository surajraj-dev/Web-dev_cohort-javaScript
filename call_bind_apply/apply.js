

// 🍽️*********************** apply() *********************** 🍽️

/*
    ->  used to immediate invoked specified 'this' context.
    ->  passed argument as a array .
*/

/**
    🤔 When to Use apply() Instead of call()?
    ✅ Use apply() when arguments are already in an array (e.g., data fetched from an API).
    ✅ Use call() when passing arguments individually.


 */

// 🏪 Function that serves a dish with a given cooking time
function cookDish(dishName, time) {
    // 🧑‍🍳 `this.name` refers to the chef who is preparing the dish
    console.log(`👨‍🍳 ${this.name} is preparing ${dishName} in ${time} minutes 🍽️`);
}

// 👨‍🍳 Creating chef objects
const chef1 = { name: "Vikas" };  // 🍽️ Chef 1
const chef2 = { name: "Sanjeev" }; // 🍽️ Chef 2

// 📞 Using apply() to invoke cookDish function with `chef1` as `this`
// 🚀 Arguments are passed inside an array
cookDish.apply(chef1, ["Paneer Butter Masala", 30]);
// ✅ Output: "👨‍🍳 Vikas is preparing Paneer Butter Masala in 30 minutes 🍽️"

// 📞 Using apply() to invoke cookDish function with `chef2` as `this`
cookDish.apply(chef2, ["Biryani", 45]);
// ✅ Output: "👨‍🍳 Sanjeev is preparing Biryani in 45 minutes 🍽️"
