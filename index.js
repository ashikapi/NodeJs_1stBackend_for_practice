// Import the Express module
const express = require('express');


// Create an instance of Express
 const app = express();

 // Route for the root URL ('/')
// Sends a simple "Hello World" message
  app.get('/', (req , res) => {
    res.send('Hello World');
  });


  // Route to get your name
// When the user visits '/api/myname', it responds with your name
  app.get('/api/myname', (req , res) => {
    res.send('My name is Ashik');
  });


  // Route to get information about some people
// Responds with a JSON array containing id, name, and age
  app.get('/api/person/info', (req, res) => {
    res.json([
        {id: 1, name: 'Ashik', age: 25},
        {id: 2, name: 'John', age: 30},
        {id: 3, name: 'Jane', age: 28},
    ]);
  });


// Start the server on port 5000
// Logs a message to the console when the server is running

  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });