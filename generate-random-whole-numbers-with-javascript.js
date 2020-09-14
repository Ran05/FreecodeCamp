/**
 Basic JavaScript: Generate
  Random Whole Numbers with JavaScript
It's great that we can generate random 
decimal numbers, but it's even more 
useful if we use it to generate random 
whole numbers.
 */



function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum(5));
