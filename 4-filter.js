import { documents } from "./data.js";

// The filter method accepts a callback function like forEach and map, and creates
// a new array like map.
//
// But with filter, the callback should return a boolean value. If it returns
// true the element is included in the new array. Otherwise, it is excluded.

// Example 1. Obtaining an array containing only the image files.
function isImageFile(document) {
  return document.type.startsWith("image/");
}
const imageDocuments = documents.filter(isImageFile);
// console.log(imageDocuments);

// Example 2. We have a file deletion feature. Users select a file to delete, a
// request is sent to our backend, and the file is deleted from the database. We
// need to filter out the file that was just deleted, using its ID to identify it.
function handleFileDeletion(docId, documents) {
  const newDocs = documents.filter(function (document) {
    return document._id !== docId; // keep all docs except the one that was deleted
  });
  return newDocs;
}
const newDocs = handleFileDeletion("507f1f77bcf86cd799439011", documents);
// console.log(newDocs);

// Example 3. Often, array methods are chained together. For example, imagine we
// need to filter out all the non-image files, and also convert the dateModified
// field to a date object.
const imageDocumentsWithLocalDates = documents
  .filter(isImageFile)
  .map(function (document) {
    const newDate = new Date(document.dateModified).toLocaleDateString();
    document.dateModified = newDate;
    return document;
  });
console.log(imageDocumentsWithLocalDates);
