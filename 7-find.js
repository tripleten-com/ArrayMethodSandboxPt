import { documents } from "./data.js";

// The find method lets you retrieve a specific item from an array. It returns the
// first element that passes the test implemeted by the callback function.

// Example 1. We need a function that retrieves a file by its name.
function findFileByName(files, name) {
  return files.find((file) => {
    return file.name === name;
  });
}
// console.log(findFileByName(documents, "document.txt"));

// Example 2. We need to find a file by its ID.
function findFileById(files, ID) {
  return files.find((file) => {
    return file._id == ID;
  });
}
// console.log(findFileById(documents, "507f1f77bcf86cd799439010"));

// Example 3. If no matching item is found, the find method returns undefined. Instead 
// of returning an error, we want our function to return an object with a message.
function improvedFindFileById(files, ID) {
  const file = files.find((file) => {
    return file._id == ID;
  })
  
  // If file is undefined, the message object is returned instead.
  return file || { message: "File not found" };
}
// console.log(improvedFindFileById(documents, "507f1f77bcf86cd799439010"));
// console.log(improvedFindFileById(documents, "non-existent-id"));
