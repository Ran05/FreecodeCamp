 /**
Basic JavaScript: Chaining If Else Statements
If/Else statements can be chained together for complex logic. Here is pseudocode of multiple chained If /Else If
  */
 
 function testSize(num) {
  // Only change code below this line
  if (num < 5){
    return "Tiny"
  }else if (num < 10){
    return "Small"
  }else if (num < 15){
    return "Medium"
  }else if (num < 20){
    return "Large"
  }else if (num >= 20) {
    return "Huge"
  }else{
    return "Change Me";
  }

  
  // Only change code above this line
}

testSize(7);
