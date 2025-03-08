/*
 Debouncing:->
            Debouncing is a technique to optimize performance by ensuring that a function executes only
             after a specified delay, preventing excessive function calls."


        🔥 Need for Debounce (Problem Statement)
        :-> Real-world problem: Imagine you have a search input field. Every time a user types a letter, 
            a request is sent to fetch results.
        :-> Without debounce: API is called on every keystroke, causing unnecessary requests and performance issues.
        :-> With debounce: API is called only after the user stops typing for a certain delay, reducing load on the server.

        🔥  Highlight Use Cases
            Interviewer: Where would you use debounce?
            :-> Search bars (delays API calls to prevent unnecessary requests).
            :-> Auto-save features (save data after the user stops typing).
            :-> Resize events (prevent multiple re-rendering when resizing the window).
            :-> Button clicks (prevent accidental double-clicking).

*/



function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer); // Clear the previous timer
        timer = setTimeout(() => {
            func.apply(this, args); // Call the function with the correct context
        }, delay); // Pass delay correctly
    };
}

function greet(name) {
    console.log(`Hello ${name}`);
}

const debouncedGreet = debounce(()=>{ greet('suraj') }, 1000);

 debouncedGreet(); // Will print "Hello Suraj" after 1 second if no new calls happen within that time.






// special usecase code 


function debounce(func, delay) {
    let timer; // Stores the timer reference

    return function (...args) {
        clearTimeout(timer); // Clear the previous timer
        timer = setTimeout(() => {
            func.apply(this, args); // Execute function after delay
        }, delay);
    };
}

// Example function
function searchQuery(query) {
    console.log(`Searching for: ${query}`);
}

// Applying debounce
const debouncedSearch = debounce(searchQuery, 1000);

// Simulating typing in a search bar
// debouncedSearch("H"); 
// debouncedSearch("He");
// debouncedSearch("Hel");
// debouncedSearch("Hell");
// debouncedSearch("Hello");


