function myLocalScope() {
  'use strict';

 
var myVar = "forScope";
  console.log('inside myLocalScope', myVar);
}

myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
