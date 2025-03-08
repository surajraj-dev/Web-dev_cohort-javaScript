
/*
    Throttling :->
          Throttling is a technique used to limit the execution of a function to at most once per
           specified time interval, preventing it from being called too frequently."

    🔥 Need for Throttle (Why Do We Use It?)
       :-> In JavaScript, some events fire continuously (e.g., scrolling, resizing, mouse movement), 
        causing performance issues when functions execute too frequently.
      :-> Throttle ensures a function executes at most once per specified time interval, preventing
       excessive execution and improving performance.

       🔥 Highlight Use Cases
            :-> Scroll events (limits function execution while scrolling to improve performance).
            :-> Button clicks (prevents multiple clicks within a short time frame).
            :-> Resize events (reduces the frequency of re-rendering when resizing the window).
            :-> Mouse movement (optimizes event handling for animations and UI interactions).
            :-> API rate limiting (controls the number of API requests to prevent overload).
*/

function throttle(func, interval) {
    let lastExecutedTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastExecutedTime >= interval) {
            func.apply(this, args);
            lastExecutedTime = now;
        }
    };
}
function greet(name) {
    console.log(`Hello ${name}`);
}

// Applying throttle (allows execution only once per 2 seconds)
const throttledGreet = throttle(greet, 2000);

throttledGreet("Suraj"); // ✅ Executes immediately
throttledGreet("Amit");  // ❌ Ignored (called within 2 seconds)

