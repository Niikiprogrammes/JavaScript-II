// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

     //Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
console.log('items:');
console.log(items);

function getLength(arr, cb) {
  //getLength passes the length of the array into the callback.
  cb(arr.getLength);
}
getLength(items, (len)=> console.log(len));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}
cb(arr[arr.length-1]);
last(items,(l)=> console.log(l));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
console.log('X:+x');
console.log('y: +y');
cb(x+y);
sumNums(2,3 ,(p) => console.log(s));
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
console.log('x: +x');
console.log('y: +y');
cb(x*y);

multiplyNums(3,4 ,(p) => console.log(p));
function contains(target, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
console.log('target:'+target);
cb(list.includes(target));
contains('yo-yo,' items, (t) => console.log(t));
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
