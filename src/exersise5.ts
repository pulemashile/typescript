class exersise5 {
    adds(a: number, b: number): number {
      this.validateInputs(a, b);
      return a + b;
    }
  
    subtract(a: number, b: number): number {
      this.validateInputs(a, b);
      return a - b;
    }
  
    divide(a: number, b: number): number {
      this.validateInputs(a, b);
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
  
    multiply(a: number, b: number): number {
      this.validateInputs(a, b);
      return a * b;
    }
  
    private validateInputs(a: number, b: number): void {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both inputs must be numbers.");
      }
    }
  }
  // example
  let calculate = new exersise5 ();
  console.log(calculate.adds(5, 9)); // Output: 8
