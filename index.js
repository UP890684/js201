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
  obj.data = 2;
  if (obj.data != NULL)
    {
      obj.checked = true;
    } 
}
