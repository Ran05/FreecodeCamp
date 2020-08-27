/**
Basic JavaScript: Count Backwards
 With a For Loop
A for loop can also count backwards,
 so long as we can define the right conditions.

In order to count backwards by twos,
 we'll need to change our initialization,
  condition, and final-expression.

We'll start at i = 10 and loop
 while i > 0. We'll decrement i by 2 each loop with i -= 2.
 */

// Setup
//var myArray = [];
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);
// Only change code below this line
