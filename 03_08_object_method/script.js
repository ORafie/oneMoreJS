/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);


/*
lidOpen: false,         another property of backpack

toggleLid                name of function or functional expression
function                not nessesery, but with this word it is easier to read the code
(lidStatus)            parameter passed to the function
{}                     statement of the function


  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },

to call the function we put it name with () behind it, it is called the function call.

*/