const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

let movies =[
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime"
  },
  {
    title: "Step Brothers",
    director: "Adam McKay",
    year: 2008,
    genre: "Comedy"
  },
  {
    title: "Free Guy",
    director: "Shawn Levy",
    year: 2021,
    genre: "Comedy/Action"
  },
  {
    title: "National Lampoon's Christmas Vacation",
    director: "Jeremiah S. Chechik",
    year: 1989,
    genre: "Comedy"
  },
  {
    title: "The Wolf of Wall Street",
    director: "Martin Scorsese",
    year: 2013,
    genre: "Comedy/Crime"
  },
  {
    title: "The Big Short",
    director: "Adam McKay",
    year: 2015,
    genre: "Comedy/Drama"
  },
  {
    title: "Bullet Train",
    director: "David Leitch",
    year: 2022,
    genre: "Comedy/Action"
  },
  {
    title: "Deadpool 2",
    director: "David Leitch",
    year: 2018,
    genre: "Comedy/Action"
  },
  {
    title: "Spirited",
    director: "Sean Anders",
    year: 2022,
    genre: "Comedy/Holiday"
  },
  {
    title: "R.I.P.D.",
    director: "Robert Schwentke",
    year: 2013,
    genre: "Comedy"
  },
]

// Creating GET route at endpoint "/movies" returning JSON object (Returns all movies)
app.get('/movies',(req,res)=>{
    res.json(movies);
})

app.get('/', (req, res) => {
    res.send('Welcome to my movie collection!');
  });

// Creating GET route at endpoint "/movies/title" to return JSON object of a single movie
app.get('/movies/:title', (req,res) => {
    res.json (movies.at.find( (movies) =>
    { movies.title === req.params.title}));
});

// Return data about a genre (description) by the name of the movie
app.get('/movies/:title/genre', (req, res) => {
  let movie = movies.find((movie) => {
    return movie.title === req.params.title;
  });

  if (!movie) {
    const message = 'Movie with the given title not found';
    res.status(404).send(message);
  } else {
    res.status(200).send(movie.genre);
  }
});

// Return data about a director(bio, birth year, death year) by name
app.get('/movies/directors/:directorName',(req,res) => {
  res.json (directors.at.find( (director) =>
    {director.name === req.params.directorName}));

    if(!directorName) {
      const message = 'Missing directors name';
      res.status(404).send(message);
    } else {
      res.status(200).json(movie.director)
    }
  });

// Allow new users to register
app.post('/users', )


app.use(express.static('public'));

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong');
});
const port = process.env.PORT || 8080;
  app.listen(port, '0.0.0.0',() => {
    console.log('Your app is listening on port 8080.');
  
  });