/**
Basic JavaScript:
Nesting For Loops
If you have a multi-dimensional array,
you can use the same logic as the prior
waypoint to loop through both the array
and any sub-arrays. Here is an example:
 */
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// passing through a Function


function multiplyAll(arr) {
  var product = 1;
     for (let i = 0; i < arr.length; i++){
          for (let j = 0; j < arr[i].length; j++){
               product = product * arr[i][j];
          }
     }
  return product;
}
// We check the length of arr in the i for loop and the arr[i] length in the j for loop.
// We multiply the product variable by itself because it equals 1, and then multiply it by the sub-arrays.
// The two sub-arrays to multiply are arr[i] and j.
// multiplyAll([[1,2],[3,4],[5,6,7]]);
