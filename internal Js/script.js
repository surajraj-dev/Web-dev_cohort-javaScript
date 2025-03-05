
console.log("task1 : syncronose line (started)");

setTimeout(() => {
    console.log("task2 : asyncronose (setTimeout 1 )");
}, 0);
setTimeout(() => {
    console.log("task3 : asyncronose (setTimeout 2)");
}, 1000);
Promise.resolve().then(()=>{
    console.log("task4 :asyncronose (promise 1 )")
})
Promise.resolve().then(()=>{
    console.log("task5 : asyncronose (promise 2 )")
})
Promise.resolve().then(()=>{
    console.log("task6 :asyncronose (promise 3 )")
})

console.log("task7 : syncronose line  (end)");

/********************************************************************************************** */
/*
🔥 JavaScript Execution Order (Short & Powerful Explanation)
1️⃣ Synchronous code executes first (Call Stack)

2️⃣ Execution Order (Priority Levels)

        1st Priority → Synchronous code (Call Stack)
        2nd Priority → Microtasks (Promise.then(), queueMicrotask())
        3rd Priority → Callback Queue (setTimeout, setInterval)
        4th Priority → UI rendering tasks in browsers

3️⃣How Event Loop Works?
     1->   The Event Loop constantly checks if the Call Stack is empty.
     2->   If empty, it picks tasks from the Microtask Queue first.
     3->   Then, it picks tasks from the Callback Queue.
     4->   The cycle repeats endlessly to ensure smooth execution.

*/
/********************************* S T A R V A T I O N   ************************************************************* */
/*
    How to Prevent Starvation?
        ✅ Avoid running Promises in an infinite loop.
        ✅ Use setTimeout or setImmediate to pause long-running microtasks.
        ✅ In Node.js, use process.nextTick() carefully (it runs before Promises).
        ✅ If microtasks are heavy, use setTimeout(fn, 0) to let other tasks run.
 */

        