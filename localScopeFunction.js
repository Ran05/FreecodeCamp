function myLocalScope() {
  'use strict';

 
var myVar = "forScope";
  console.log('inside myLocalScope', myVar);
}

myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


//Basic JavaScript: Global vs. Local Scope in Functions


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

var outerWear  = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
