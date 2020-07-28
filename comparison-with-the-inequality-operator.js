/** 
 * Basic JavaScript: Comparison with the Inequality OperatorPassed
The inequality operator (!=) is the opposite of the equality operator.
It means "Not Equal" and returns false where equality would return true and vice versa.
Like the equality operator, the inequality operator will convert data types of values while comparing.
 * 
 * 
*/





// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
