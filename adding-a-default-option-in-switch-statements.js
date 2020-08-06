/**
Basic JavaScript: Adding a Default Option in Switch Statements
In a switch statement you may not be able to specify all possible 
values as case statements. Instead, you can add the default statement 
which will be executed if no matching case statements are found. 
Think of it like the final Else statement in an If/Else chain.
 */

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
    return "stuff";
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

