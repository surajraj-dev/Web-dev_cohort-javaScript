// 🍽️*********************** bind() Method Example *********************** 🍽️
/*
      
 */
// 🏪 Function that serves a dish with a given cooking time
function cookDish(dishName, time) {
    // 🧑‍🍳 `this.name` refers to the chef who is preparing the dish
    console.log(`👨‍🍳 ${this.name} is preparing ${dishName} in ${time} minutes 🍽️`);
}

// 👨‍🍳 Creating chef objects
const chef1 = { name: "Vikas" };   // 🍽️ Chef 1
const chef2 = { name: "Sanjeev" }; // 🍽️ Chef 2

// 🔗 Using bind() to create a new function for each chef bcz return
const vikasCooking = cookDish.bind(chef1, "Paneer Butter Masala", 30);
const sanjeevCooking = cookDish.bind(chef2, "Biryani", 45);

// 🚀 Calling the new functions later
vikasCooking();  
// ✅ Output: "👨‍🍳 Vikas is preparing Paneer Butter Masala in 30 minutes 🍽️"

sanjeevCooking();  
// ✅ Output: "👨‍🍳 Sanjeev is preparing Biryani in 45 minutes 🍽️"



/**
     📌 
        ✔ bind() does not execute the function immediately – it returns a new function.
        ✔ First argument → The object that 'this' should refer to (chef1 or chef2).
        ✔ Second argument onward → Function parameters (dishName, time).
        
        ✔ New function must be called later (vikasCooking() & sanjeevCooking()).
 */