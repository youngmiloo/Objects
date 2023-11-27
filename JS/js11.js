// Constructor function for the User object
function User(name, address, bodyDimensions) {
    this.name = name;
    this.address = address;
    this.bodyDimensions = bodyDimensions;
}

// Create user usuario1
let usuario1 = new User("Tom Holland", "47 Round St", { height: 190, weight: 85 });

// Copy usuario1 to create usuario2 (using Object.assign to create a shallow copy)
let usuario2 = Object.assign({}, usuario1);

// Modify some properties of usuario2 to ensure they are different objects
usuario2.name = "Tom Holland";
usuario2.address = "10 London St";
usuario2.bodyDimensions = { height: 180, weight: 80 };

// Display the user objects
console.log("usuario1:", usuario1);
console.log("usuario2:", usuario2);