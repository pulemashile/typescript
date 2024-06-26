"use strict";
class exersise5 {
    adds(a, b) {
        this.validateInputs(a, b);
        return a + b;
    }
    subtract(a, b) {
        this.validateInputs(a, b);
        return a - b;
    }
    divide(a, b) {
        this.validateInputs(a, b);
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }
    multiply(a, b) {
        this.validateInputs(a, b);
        return a * b;
    }
    validateInputs(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Both inputs must be numbers.");
        }
    }
}
// example
let calculate = new exersise5();
console.log(calculate.adds(5, 9)); // Output: 8
