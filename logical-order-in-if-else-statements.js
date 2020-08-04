/**
Basic JavaScript: Logical Order in If Else Statements
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first
 */



function orderMyLogic(val) {
  if (val <= 5) {
    return "Less than 5"; //switch this //true
  } else if (val <= 10) {
    return "Less than 10";//switch this //true
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
