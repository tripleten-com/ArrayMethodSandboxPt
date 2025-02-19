import { documents, validatedDocuments } from "./data.js";

// The every method is basically the opposite of the some method. It returns true
// if the callback function returns true for every item in the array.
//
// So, while we use .some() to check whether at least one item meets some criteria,
// we use .every() to check whether _every_ item meets some criteria.

// Example 1. Now we need to check whether _all_ documents in a batch are valid, where
// validity is determined by the isValid function. If they are all valid, we send a
// message to the user and continue processing the request.
function isValid(document) {
  const isNotTooBig = document.size <= 30000000;
  const hasNoSpaces = !document.name.includes(" ");
  return isNotTooBig && hasNoSpaces;
}

function allAreValid(documents) {
  // Check if every document is valid
  return documents.every(isValid);
}
// if (allAreValid(documents)) {
//   // Shouldn't print anything
//   console.log("Documents validated: processing request...");
// }
// if (allAreValid(validatedDocuments)) {
//   console.log("Documents validated: processing request...");
// }