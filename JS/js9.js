// Constructor function for the fruits object
function Fruits(name, kg) {
    this.name = name || "";
    this.kg = kg || 0;
}

// Method to sell fruits
Fruits.prototype.sell = function(quantity) {
    console.log(`Sold ${quantity} kg of ${this.name}`);
    this.kg -= quantity;
};

// Method to buy fruits
Fruits.prototype.buy = function(quantity) {
    console.log(`Bought ${quantity} kg of ${this.name}`);
    this.kg += quantity;
};

// Method to get the out-of-stock date (dummy implementation without a date property)
Fruits.prototype.outOfStockDate = function() {
    console.log("Out of stock date: Not implemented without a date property");
};

// Method to get the buying date (dummy implementation without a date property)
Fruits.prototype.buyingDate = function() {
    console.log("Buying date: Not implemented without a date property");
};