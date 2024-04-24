// I used W3 schools Javascript Asynchronous tutorial to understand some
// more of my options for this exercise
// https://www.w3schools.com/js/js_asynchronous.asp

function countElements(arr,element, callback)
{
  let split = Math.floor(Math.sqrt(arr.length));
  let total = 0;
  for(let i = 0; i < split; i++)
  {
    let piece = arr.slice((arr.length/split)*i,(arr.length/split)*(i+1));
    total += callback(piece, element);
  }
  return total;
}

function output(arr, element) 
{
  return countElements(arr, element, function (arr, element) {
    let currTotal = 0;
    for (let i = 0; i < arr.length; i++) 
    {
      if (arr[i] == element) 
      {
        currTotal++;
      }
    }
    return currTotal;
  });
}
