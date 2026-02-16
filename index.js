const express = require('express');
 const app = express();
  app.get('/', (req , res) => {
    res.send('Hello World');
  });

  app.get('/api/myname', (req , res) => {
    res.send('My name is Ashik');
  });

  app.get('/api/person/info', (req, res) => {
    res.json([
        {id: 1, name: 'Ashik', age: 25},
        {id: 2, name: 'John', age: 30},
        {id: 3, name: 'Jane', age: 28},
    ]);
  });


  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });