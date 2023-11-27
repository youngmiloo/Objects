function getTotalKgUsingObjectValues(frutas) {
    return Object.values(frutas).reduce((total, kg) => total + kg, 0);
  }




  
  function getTotalKgUsingForOf(frutas) {
    let total = 0;
    for (let kg of frutas) {
      total += kg[1];
    }
    return total;
  }