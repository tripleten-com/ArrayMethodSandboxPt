import { documents } from "./data.js";

// The reduce method is the first that accepts a callback with a different signature.
// An example will help make the differences clear.

// Example 1. Get a sum of the elements in the numbers array. We can use the reduce
// method to "reduce" the array into a single value.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
// console.log(sum);

// The callback accepts two arguments: the accumulator and the current value. In the
// first iteration, the accumulator starts with the value of the first element in the
// array; in the second iteration, the accumulator receives the value that the callback
// returns; and so on.

// Run the logWithDetails function to what happens in each iteration.
function logWithDetails() {
  const sum = numbers.reduce(function (accumulator, currentValue) {
    console.log("Start iteration");
    console.log("accumulator is", accumulator);
    console.log("currentValue is", currentValue);
    console.log("End iteration\n");
    return accumulator + currentValue;
  });
  console.log("sum is", sum);
}
// logWithDetails()

// Example 2. By default, the accumulator starts with the first element in the array.
// But this can be changed by passing a second argument to the reduce method. Here's a
// silly example to show the mechanics.
const letters = ["A", "B", "C"];
const lyrics = letters.reduce(function (acc, curr) {
  return acc + curr;
}, "Now I know my "); // In the first iteration, the accumulator is "Now I know my "
// console.log(lyrics + "'s, next time won't you sing with me?")

// Example 3. We can access the index of the current element. If no initial value is
// specified, then in the first iteration the index of the current element is 1.
function withNoInitialValue() {
  const sum = numbers.reduce(function (acc, curr, i) {
    console.log("Start iteration");
    console.log("accumulator is", acc);
    console.log("current value is", curr);
    console.log("the index of the current value is", i);
    console.log("End iteration\n");
    return acc + curr;
  });
  console.log("sum is", sum);
}
// withNoInitialValue();

// But if we pass an initial value, then the index of the current element in the first
// iteration is 0.
function withInitialValue() {
  const sum = numbers.reduce(function (acc, curr, i) {
    console.log("Start iteration");
    console.log("accumulator is", acc);
    console.log("current value is", curr);
    console.log("the index of the current value is", i);
    console.log("End iteration\n");
    return acc + curr;
  }, 100); // specifying an initial value of 100
  console.log("sum is", sum);
}
// withInitialValue();

// Example 3. We need to get counts of files based on their type. The results must be
// provided in an object with keys corresponding to the object type.
function countFilesByType(documents) {
  const counts = documents.reduce(function (acc, curr) {
    const type = curr.type;
    if (acc[type]) {
      // if the type is in the object, add one to its count
      acc[type] = acc[type] + 1;
    } else {
      // otherwise add the type with a count of 1
      acc[type] = 1;
    }
    return acc;
  }, {}); // initial value is an empty object where the counts will be tracked
  return counts;
}
// console.log(countFilesByType(documents));

// Example 4. We need to print some nice output to our user: a markdown table with
// two columns listing the names and sizes of their the documents. At the top of the
// table their should be a header row. Expected output will look like this
//
// | Name      | Size |
// | --------- | ---- |
// | Graph.png | 1100 |
// | audio.mp3 | 3000 |
// 
// Whitespace doesn't matter, that will be handled by the markdown renderer.
function printTable(documents) {
  const head = "| Name | Size |\n" + "| ---- | ---- |\n";
  const table = documents.reduce(function (acc, curr) {
    return acc + `| ${curr.name} | ${curr.size} |\n`; // add a row to the table
  }, head); // initial value is the top two rows of the table
  return table;
}
console.log(printTable(documents));
