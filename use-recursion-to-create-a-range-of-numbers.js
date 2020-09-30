/**
Basic JavaScript: Use Recursion to Create a Range of Numbers
Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
 */

function rangeOfNumbers(startNum, endNum) {

 if (startNum - endNum == 0) {
  return [startNum];
} else if (startNum <= endNum) {
  var numbers = rangeOfNumbers(startNum, endNum - 1);    
  numbers.push(endNum);
  return numbers;
}
};


console.log(rangeOfNumbers(0,1));