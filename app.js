// const express = require('express');
// const add = require('./math');

// const app = express();

// // Root route
// app.get('/', (req, res) => {
//   const sum = add(2, 3);
//   res.send(`Sum is: ${sum}`);
// });

// // App listens on port 8080
// app.listen(8080, () => {
//   console.log("Server running on port 8080");
// });

const express = require('express');
const multiply = require('./multiply');  // changed from add

const app = express();

// Root route
app.get('/', (req, res) => {
  const result = multiply(2, 3);   // multiply instead of add
  res.send(`Product is: ${result}`);
});

// App listens on port 8080
app.listen(8080, () => {
  console.log("Server running on port 8080");
});