/**
Basic JavaScript: Use Recursion 
to Create a Countdown
In a previous challenge, 
you learned how to use recursion 
to replace a for loop. Now, 
let's look at a more complex 
function that returns an array 
of consecutive integers starting
 with 1 through the number passed 
 to the function.
 */


//var countArray = [];

function countdown(n) {
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
console.log(countdown(10)); // [ 1, 2, 3, 4, 5 ];