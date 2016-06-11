// Dependencies
const CallbackBuffering = require("../lib");

// Create a new callback buffer
var cb = new CallbackBuffering();

// Callbacks a random unique number after 1 sec
function getUniqueRandomNumberAsync(callback) {
    if (cb.check(callback)) { return; }
    setTimeout(() => {
        debugger
        cb.done(Math.random());
    }, 1000);
}

// Request the unique number few times.
// It should be unique, and generated once
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
getUniqueRandomNumberAsync(console.log);
// ... after one second
// => 0.3639475910458714
// => 0.3639475910458714
// => 0.3639475910458714
// => 0.3639475910458714

// After one second (after the random number is found)
// we request it again
setTimeout(() => {
    getUniqueRandomNumberAsync(console.log);
    // => 0.3639475910458714
}, 1000);

