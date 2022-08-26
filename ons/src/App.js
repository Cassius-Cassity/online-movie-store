import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  const key = process.env.REACT_APP_FEATURE_KEY;

  useEffect(() => {
    axios.get(key)
    .then((res) => {
      setMovies(res.data.results);
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  
  return (
    <div className="movie-container">
      <Header/>
         {movies.length > 0 && movies.map((movie) =>
          <Movie key={movie.id} {...movie} />
         )}
    </div>
  );
}

export default App;
