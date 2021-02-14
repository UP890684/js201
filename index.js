/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id()
{
  return "UP890684";
}

function fn()
{
  return 'Max';
}

function sn()
{
  return 'Watson';
} 

function add(a, b)
{
  return a + b;
}

function subtract(a, b)
{
  return a - b;
}

function checkObject(obj)
{
  obj.checked = true;
}

function checkObjectInside(obj)
{
  if (obj.data) obj.data.checked = true;
}

function arraySet(arr, i, n)
{
  if (i < arr.length && Number.isInteger(i))
  {
    arr[i] = n;
  }
}

function addAll(arr)
{
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++)
  {
    arrSum += arr[i]
  }

  return arrSum;

  /*
  let i = 0;
  let x = 0;

  while (i < arr.length)
  {
    x += arr[i];
    i += 1;
  }
  return x;
  */
}

function larger(a, b)
{
  if (a > b)
  {
    return a;
  }
  else
  {
    return b;
  }
}

function largest(arr)
{
  let largest = null;

  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] > largest)
    {
      largest = arr[i];
    }
  }
  return largest;
}

function compare(a, b)
{
  let check = true;

  if (a.length === b.length)
  {
    for (let i = 0; i < a.length; i++)
    {
      if (a[i] === b[i])
      {
        check = true;
      }
      else
      {
        return false;
      }
    }
  }
  else
  {
    return false;
  }
  return check;
}

function addToAll(arr, n)
{
  let arr2;

  for (let i = 0; i < arr.length; i++)
  {
    let number = arr[i] + n;
    arr[i] = number;
  }
  return arr;
}

function rememberThis()
{

}

function nArray(n)
{

}

function addAllOpt(arr)
{

}

function divisors(arr, div)
{

}

function multiples(n, m)
{
  
}
