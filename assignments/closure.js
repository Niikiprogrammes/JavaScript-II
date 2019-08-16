// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const whatsUp = () => {
let N = 0;
if(debug) console.log('N (inside): '+N );
return function(name);
let N = N+1;
if (debug) console.log('N  (inside'+N);
let Life = '!'.repeat(N);
if(debug) console.log(' life:'+life);
let w = 'whatsUp, ${name} ${ life}';
if(debug) console.log('w:'+w);
return w;



};
const w = whatsUp();
console.log(w('nikki'));
console.log(w('suh'));
console.log(w('dad'));
console.log(w('mom'));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
