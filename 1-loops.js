// Often in programming we have some code that we want to execute
// once on each item in a collection of items. For example, we may
// want to print out the name of each person in a list of people.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// We could do this without a loop like so:
function withoutForLoop() {
  console.log(people[0].name);
  console.log(people[1].name);
  console.log(people[2].name);
}
// withoutForLoop();

// But what if there were 100 people in the list? And more
// importantly, what if the contents of the list changes?
// To account for this, we can use a loop.
function withForLoop() {
  for (let i = 0; i < people.length; i++) {
    // We use the variable i to access each item in the array.
    console.log(people[i].name);
  }
}
// withForLoop();

// Finally, let's look in detail at what happens in each step. Uncomment the
// function call, run this file in the terminal with `node loops.js`, and
// observe the output.
function withDetailedOutput() {
  for (let i = 0; i < people.length; i++) {
    console.log("i is", i);
    console.log("is i < people.length?", i < people.length);
    console.log("the body of the loop is executed");
    console.log(people[i].name);
    console.log("the increment expression is executed");
    console.log("end of iteration\n");
  }
}
// withDetailedOutput();
