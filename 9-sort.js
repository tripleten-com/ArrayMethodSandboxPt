import { documents } from "./data.js";
// The sort method does what you think it does. It sorts the elements in an array. By
// default, it sorts the elements in ascending order. The callback function is used
// to determine the order in which the elements are placed. The examples will explain.

// Example 1. Sort documents by size, from least to greatest.
function sortBySize(documents) {
  return documents.sort((a, b) => {
    // If a is less than b, sort b before a.
    // If a is greater than b, sort a before b.
    // If a is equal to b, leave the order unchanged.
    return a.size - b.size;
  });
}
// console.log(sortBySize(documents));

// Example 2. Expand sortBySize to allow specifying sort order.
function sortBySizeVariableOrder(documents, descending) {
  return documents.sort((a, b) => {
    // if descending is true, sort in descending order
    if (descending) {
      return b.size - a.size;
    } else {
      return a.size - b.size;
    }
  });
}
// console.log(sortBySizeVariableOrder(documents, true)); // descending order
// console.log(sortBySizeVariableOrder(documents, false)); // ascending order

// Example 3. Sort documents based on the supplied property. We've provided a default
// value of ascending for the order parameter. Note that we need to use different
// comparisons for different properties.
function sortByProperty(documents, property, order = "asc") {
  let comparison; // this will store the result of the comparison function
  return documents.sort((a, b) => {
    if (property == "dateModified") {
      // To compare dates, we need to convert the to Date objects.
      comparison = new Date(a[property]) - new Date(b[property]);
    } else if (typeof a[property] == "string") {
      // To sort strings properly, either convert them to lowercase first, or
      // use the string's localCompare method.
      comparison = a[property].localeCompare(b[property], "en", {
        sensitivity: "base",
      });
    } else if (typeof a[property] == "number") {
      // Numbers can be compared directly.
      comparison = a[property] - b[property];
    } else {
      return "Invalid or unsortable property";
    }
    // To sort in descending order, we can multiply the comparison by -1.
    if (order == "desc") {
      comparison *= -1;
    }

    return comparison;
  });
}
// console.log(sortByProperty(documents, "name"), "desc"); // sort by name, descending
// console.log(sortByProperty(documents, "size")); // sort by size, ascending
// console.log(sortByProperty(documents, "dateModified")); // sort by date, ascending
// console.log(sortByProperty(documents, "foo")); // invalid property
