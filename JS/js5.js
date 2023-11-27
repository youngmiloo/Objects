// exercise 5

let calculator = {
    // a) read() prompts for two values and saves them as object properties with names a and b respectively.
    read() {
      this.a = parseFloat(prompt('Enter the first value:', 0));
      this.b = parseFloat(prompt('Enter the second value:', 0));
    },
  
    // b) sum() returns the sum of saved values.
    sum() {
      return this.a + this.b;
    },
  
    // c) mul() multiplies saved values and returns the result.
    mul() {
      return this.a * this.b;
    }
  };