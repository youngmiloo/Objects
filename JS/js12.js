// Class definition for the User object
class User {
    constructor(name, address, bodyDimensions) {
        this.name = name;
        this.address = address;
        this.bodyDimensions = bodyDimensions;
    }

    // Method to get user's information
    getUserInfo() {
        return `Name: ${this.name}, Address: ${this.address}, Body Dimensions: ${JSON.stringify(this.bodyDimensions)}`;
    }

    // Method to get user's friends (dummy implementation without a friends property)
    getFriends() {
        console.log("Getting user's friends: Not implemented without a friends property");
    }

    // Method to get user's mate (dummy implementation without a mate property)
    getMate() {
        console.log("Getting user's mate: Not implemented without a mate property");
    }
}

// Create user usuario1
let usuario1 = new User("Tom Holland", "47 Round St", { height: 190, weight: 85 });

// Copy usuario1 to create usuario2 (using Object.assign to create a shallow copy)
let usuario2 = Object.assign({}, usuario1);

// Modify some properties of usuario2 to ensure they are different objects
usuario2.name = "Tom Holland";
usuario2.address = "10 London St";
usuario2.bodyDimensions = { height: 180, weight: 80 };

// Display user information using the getUserInfo method
console.log("usuario1 info:", usuario1.getUserInfo());
console.log("usuario2 info:", usuario2.getUserInfo());

// Call the getFriends method (dummy implementation without a friends property)
usuario1.getFriends();
usuario2.getFriends();

// Call the getMate method (dummy implementation without a mate property)
usuario1.getMate();
usuario2.getMate();