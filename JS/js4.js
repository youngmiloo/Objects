// exercise 4

function makeUser() {
    return {
      name: "Milosz",
      ref: function() {
        return this;
      }
    };
  }
  
  let user = makeUser();
  console.log(user.ref().name); // Output: Milosz