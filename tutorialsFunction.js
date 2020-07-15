//1.Basic Javascript: Functions Tutorials


function myLocalScope() {
  'use strict';

 
var myVar = "forScope";
  console.log('inside myLocalScope', myVar);
}

myLocalScope();
console.log('outside myLocalScope', myVar);


//2.Basic JavaScript: Global vs. Local Scope in Functions
//(Global Variable can override over the Local variable using function)... 

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
var outerWear  = "sweater";
  return outerWear;
}

myOutfit();


//3.Return a Value from a Function with Return


function timesFive(num){
  return num * 5;
}

var answer = timesFive(5);
