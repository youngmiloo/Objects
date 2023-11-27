function getTotalKgByFruit(frutas) {
    return Object.entries(frutas).reduce((totalByFruit, [fruit, kg]) => {
      let fruitName = fruit.split(' ')[0];
      totalByFruit[fruitName] = (totalByFruit[fruitName] || 0) + kg;
      return totalByFruit;
    }, {});
  }