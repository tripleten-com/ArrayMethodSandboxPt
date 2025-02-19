import { documents } from "./data.js";

// The map method is similar to forEach: it accepts a callback function that gets
// called on each element in the array, and the callback receives the same
// arguments.

// But there is a critically important difference: the map method returns a new
// array. This new array contains the return values produced by calling the
// function on each element.

// Example 1. Obtaining an array containing the names of all documents.
const docNames = documents.map(function (document) {
  return document.name;
});
// console.log(docNames);

// Example 2. Before rendering the document data on our frontend we need parse the
// dateModified field into MM/DD/YYYY format.
const docsWithLocalDates = documents.map(function (document) {
  const newDate = new Date(document.dateModified).toLocaleDateString();
  document.dateModified = newDate;
  return document;
});
// console.log(docsWithLocalDates);

// Example 3. We are handling file uploads and there is a size limit of 30MB. If a
// file exceeds the limit we need to send the user an error message. Otherwise, we
// send "File uploaded successfully".
const fileUploadMessages = documents.map(function (document) {
  if (document.size > 30000000) {
    return "File must be less than 30MB";
  } else {
    return "File uploaded successfully";
  }
});
// console.log(fileUploadMessages)
