/**
Basic JavaScript: 
Use Multiple Conditional 
(Ternary) Operators
In the previous challenge,
you used a single conditional operator.
You can also chain them 
together to check for multiple conditions.
 */



function checkSign(num) {
return num > 0 ? "positive" : num < 0 ? "negative": "zero";
}

console.log(checkSign(-1));
