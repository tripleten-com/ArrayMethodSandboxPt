// In loops.js we used a for loop to print out the names of each person in the
// people array.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

function withForLoop() {
  for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
  }
}

// Here is the equivalent loop using the forEach method:
function withForEach() {
  people.forEach((person) => {
    console.log(person.name);
  });
}

// The forEach method is available to all JavaScript arrays. It accepts a
// function as an argument, and this function is called once for each item the
// array. This function (called the callback) receives the current item as an
// argument (called `people` in this example), so we don't have to worry about
// the index.

// While we don't have to worry about the index, you can still access it as the
// second argument to the callback function.
function forEachWithIndex() {
  people.forEach((person, i) => {
    console.log("index:", i);
    console.log(person.name);
  });
}

// Passing anonymous callback functions to array methods is common, but often
// it is preferable to use named functions. In this example we have a 
// logDetailedInfo function. This function accepts an object with data about
// a person and a number, and prints some info based on this to the console.
function logDetailedInfo(personData, i) {
  console.log(`${i+1}. ${personData.name} is ${personData.age} years old.`)
}

// We can use this function in a forEach method like this. Note that we are
// just passing the logDetailedInfo function by its name, not calling it. Call 
// forEachWithCallback to see the output.
function forEachWithCallback() {
  people.forEach(logDetailedInfo);
}
 