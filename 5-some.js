import { documents, validatedDocuments } from "./data.js";

// The some method accepts a callback function that gets called on each element.
// This callback should return a boolean value. If the callback returns true for
// any element, the some method returns true. Otherwise, it returns false.

// Example 1. Spaces are not supported in filepaths in a number of contexts. If a
// batch of documents contains a space in its name, a warning message should be
// sent.
function containsSpaces(documents) {
  return documents.some(function (document) {
    return document.name.includes(" ");
  });
}
// if (containsSpaces(documents)) {
//   console.log("One or more invalid file names");
// }
// if (containsSpaces(validatedDocuments)) {
//   console.log("One or more invalid file names"); // Should not print anything
// }

// Example 2. We need to send a user a message if one or more files is too large.
function isFileTooLarge(documents) {
  return documents.some(function (document) {
    return document.size > 30000000;
  });
}
// if (isFileTooLarge(documents)) {
//   console.log("One or more files is >30MB");
// }
// if (isFileTooLarge(validatedDocuments)) {
//   console.log("One or more files is >30MB"); // Should not print anything
// }
