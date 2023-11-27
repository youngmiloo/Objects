// Constructor function for the carPartsInventory object
function CarPartsInventory() {
    this.parts = [
        { name: "Spark Plugs", quantity: 50 },
        { name: "Oil Filters", quantity: 30 },
        { name: "Brake Pads", quantity: 20 },
        { name: "Air Filters", quantity: 40 },
        // Add more rows as needed
    ];
}

// Method to add a specified quantity to every spare part
CarPartsInventory.prototype.addInventory = function(quantityToAdd) {
    this.parts.forEach(part => {
        part.quantity += quantityToAdd;
    });
    console.log(`Added ${quantityToAdd} to each spare part.`);
};

// Create an instance of the CarPartsInventory
let carPartsInventory = new CarPartsInventory();