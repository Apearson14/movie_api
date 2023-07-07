const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

// Creating GET route at endpoint "/movies" returning JSON object (Returns all movies)
app.get('/movies',(req,res)=>{
    res.json(movies);
})

app.get('/', (req, res) => {
    res.send('Welcome to my movie collection!');
  });

app.use(express.static('public'));

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong');
  });