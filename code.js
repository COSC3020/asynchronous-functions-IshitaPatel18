// I used W3 schools Javascript Asynchronous tutorial to understand some
// more of my options for this exercise
// https://www.w3schools.com/js/js_asynchronous.asp

function count(arr, element) 
{
  let promise = new Promise(function (resolve) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] == element) 
      {
        total++;
      }
    }
    resolve(total);
  });
  return promise;
}

async function recieve(arr, element) 
{
  const result = await count(arr, element);
  return result;
}
