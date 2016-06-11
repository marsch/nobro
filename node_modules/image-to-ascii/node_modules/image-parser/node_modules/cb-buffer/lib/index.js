"use strict";

module.exports = class CbBuffer {

    /**
     * CbBuffer
     * Creates a new instance of `CbBuffer`.
     *
     * The instance will contain methods documented below and the following fields:
     *
     *  - `buffer` (Array): An array of functions to be called.
     *  - `waiting` (Boolean): A flag representing the state of the buffer.
     *  - `is_done` (Boolean): A flag representing the done state (is done or not).
     *  - `args` (Array): The callback function arguments.
     *
     * @name CbBuffer
     * @function
     * @return {CbBuffer} The `CbBuffer` instance.
     */
    constructor () {
        // The functions buffer
        this.buffer = [];
        this.undone();
    }

    /**
     * check
     * Use this function to append the new function and `return` if needed:
     *
     * ```js
     * if (cb.check(callback)) { return; }
     * ```
     *
     * @name check
     * @function
     * @param {Function} fn The callback function.
     * @return {Boolean} `true` if thw async function was called already.
     */
    check (fn) {
        if (this.is_done) {
            this.call(fn);
            return true;
        }

        this.buffer.push(fn);
        if (this.waiting) {
            return true;
        } else {
            this.waiting = true;
        }

        return false;
    }

    /**
     * call
     * Calls the provided function with the callback arguments.
     *
     * @name call
     * @function
     * @param {Function} fn The function to call.
     */
    call (fn) {
        fn.apply(this, this.args);
    }

    /**
     * clear
     * CLears the callback array.
     *
     * @name clear
     * @function
     */
    clear () {
        this.buffer = [];
    }

    /**
     * undone
     * Resets the internal data.
     *
     * @name undone
     * @function
     */
    undone () {
        // Waiting: false/true
        this.waiting = false;

        // Is done: false/true
        this.is_done = false;

        // This will be the callback arguments array
        this.args = [];
    }

    /**
     * done
     * Calls all the functions from the buffer.
     *
     * @name done
     * @function
     */
    done () {
        this.is_done = true;
        this.args = arguments;
        this.buffer.forEach(fn => this.call(fn));
        this.clear();
    }
};
