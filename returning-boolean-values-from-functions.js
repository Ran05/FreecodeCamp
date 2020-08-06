/**
Basic JavaScript: Returning Boolean Values from Functions
You may recall from Comparison with the Equality Operator 
that all comparison operators return a boolean true or false value.

Sometimes people use an If/Else statement to do a comparison, like this:
 */
function isEqual(a,b) {
  If (a === b) {
    return true;
  } Else {
    return false;
  }
}

//But there's a better way to do this. Since === returns true or false,
 // we can return the result of the comparison:

function isLess(a, b) {
  // Only change code below this line
 return a <= b ;
  // Only change code above this line
}




isLess(10, 15);
