const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert')
eval(fs.readFileSync('code.js')+'');

const test1 = [1,2,1,1];
recieve(test1, 1, function(value) {
  assert(value === 3)
});

const test2 = [3,3,3,3];
recieve(test2, 3, function(value) {
  assert(value === 4)
});

const test3 = [2,3,4,5];
recieve(test3, 4, function(value) {
  assert(value === 1)
});

// function regular(arr, element) {
//   let total = 0;
//   for(let i = 0; i < arr.length; i++)
//   {
//     if(arr[i] == element)
//     {
//       total++
//     }
//   }
//   return total;
// }

// const test =
//     jsc.forall("array nat", "nat", function(arr, n) {
//         return JSON.stringify(regular(arr, n)) ==
//             JSON.stringify(recieve(arr, n));
//     });
// jsc.assert(test);
