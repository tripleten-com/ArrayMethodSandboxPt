// Suppose we have a database full of employee data, a small slice of which
// is represented as the array below.

const employees = [
  {
    name: "Alice",
    email: "alice@company.com",
    age: 25,
    salary: 100000,
    role: "Manager",
  },
  {
    name: "Bob",
    email: "bob@company.com",
    age: 30,
    salary: 70000,
    role: "Junior Engineer",
  },
  {
    name: "Charlie",
    email: "charlie@company.com",
    age: 35,
    salary: 75000,
    role: "Junior Engineer",
  },
  {
    name: "David",
    email: "david@company.com",
    age: 40,
    salary: 90000,
    role: "Lead Engineer",
  },
  {
    name: "Eve",
    email: "eve@company.com",
    age: 45,
    salary: 150000,
    role: "CTO",
  },
];

// There is a preexisting function in our codebase that requires an array of
// all our employees email addresses, for use in mass emails. How can we create
// this array?

// Here is how we could do it with a forEach loop:
function withForEach() {
  // Create a new array to hold the results.
  const emails = [];
  employees.forEach((employee) => {
    // For each employee, add their email to the array.
    emails.push(employee.email);
  });
  console.log("emails:", emails);
}

// But we can do it more simply with the map method.
function withMap() {
  const emails = employees.map((employee) => {
    return employee.email;
  });
  console.log(emails);
}

// What is happening here? It's quite simple actually. The map method accepts
// a callback function just like the forEach method. But the map method doesn't
// just call the function on each item. Instead, it returns a new array
// containing the return values at each iteration.

// Here is some more detailed output to explain what's going on.
function withDetailedOutput() {
  const emails = employees.map((employee, i) => {
    console.log("Iteration", i);
    console.log("Employee Name:", employee.name);
    console.log("Employee Email:", employee.email);
    console.log("Adding employee email to the new array\n");
    return employee.email;
  });
  console.log("Iteration complete. Here's the new array:\n", emails);
}
