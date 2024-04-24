const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function regular(arr, element) {
  let total = 0;
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] == element)
    {
      total++
    }
  }
  return total;
}

const test =
    jsc.forall("array nat", "nat", function(arr, n) {
        return JSON.stringify(regular(arr, n) ==
            JSON.stringify(output(arr, n));
    });
jsc.assert(test);
