const fs = require('fs');
const assert = require('assert')

eval(fs.readFileSync('code.js')+'');

// I looked at the code.test.js file from egkallas to understand how
// these tests should be run if a callback is used

let test1 = [1,2,1,1];
let test2 = [3,3,3,3];
let test3 = [2,5,4,3];
let test4 = [0];
let test5 = [0, 1, 2, 3, 4, 5, 6, 7];
let test6 = [1,2,3,4];
let test7 = [10,12,100,34,8,1;00]

recieve(test1, 1, function(value) {
  assert(value === 3)
});

recieve(test2, 3, function(value) {
  assert(value === 4)
});

recieve(test3, 4, function(value) {
  assert(value === 1)
});

recieve(test4, 2, function(value) {
  assert(value === 0)
});

recieve(test5, 8, function(value) {
  assert(value === 0)
});

recieve(test6, 1, function(value) {
  assert(value === 1)
});

recieve(test7, 100, function(value) {
  assert(value === 2)
});

