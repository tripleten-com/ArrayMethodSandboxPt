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
// withForLoop();

// Here is the equivalent loop using the forEach method. Note that we don't need
// to worry about the index variable or the length of the array.
function withForEach() {
  people.forEach((person) => {
    console.log(person.name);
  });
}
// withForEach();

// But if necessary, we can access the index variable as the second argument of
// the callback function.
function forEachWithIndex() {
  people.forEach((person, i) => {
    console.log(`index: ${i}, name: ${person.name}`);
  });
}
// forEachWithIndex();

// Passing anonymous callback functions to array methods is common, but often
// it is preferable to use named functions. Note that logDetailedInfo usage accepts
// the same arguments as the anonymous callbacks we've been using.
function logDetailedInfo(personData, i) {
  console.log(`${i + 1}. ${personData.name} is ${personData.age} years old.`);
}

// We can use this function in a forEach method like this. Note that we are
// just passing the logDetailedInfo function by its name, not calling it.
function forEachWithNamedCallback() {
  people.forEach(logDetailedInfo);
}
// forEachWithNamedCallback();
