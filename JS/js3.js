// exercise 3

  function multiplyNumeric(obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === 'number') {
        obj[key] *= 2;
      }
    }
  }