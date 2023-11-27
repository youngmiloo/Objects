// exercise 2

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = Object.keys(salaries).reduce((total, employee) => total + salaries[employee], 0);
  
  console.log(sum);  // Output: 390