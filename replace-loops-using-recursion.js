/**
/learn
Basic JavaScript: 
Replace Loops using Recursion
Recursion is the concept that 
a function can be expressed in 
terms of itself. To help understand 
this, start by thinking about the 
following task: multiply the first
 n elements of an array to create 
 the product of those elements. 
 Using a for loop, you could do this:
 */


function sum(arr, n) {
  if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

console.log(sum([1],0));
