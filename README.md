# TripleTen Array Method Sandbox

This repl contains a collection of examples of using JavaScript array methods. Most JS files correspond to a specific array method. The exception is `loops.js` which provides a summary of using `for` loops to iterate over an arrays.

We won't be explaining the syntax in detail, we assume you are already familiar with it.

## Running the examples

You can run the JavaScript files in the terminal with the command `node filename.js`. To access the terminal, use the keyboard shortcut **Ctrl+`**, or by selecting **Left Sidebar > All Tools > Shells**.

Since there are multiple examples in each file, we have wrapped each example in a function. To see the output, call the function and run `node filename.js` in the terminal.

## The data

Many examples rely on data found in `data.js`: an array of objects storing document metadata. 

This data imported into each of the files like so:

```js
import { documents } from "./data.js"
```

This essentially creates a variable called `documents` in that file that stores the array from `data.js`.