import './App.css';
import { useState } from 'react';
import Search from './components/search';
import DisplayMovie from './components/display_movies';
import FavoriteMovies from './components/favorite_movies';

function App() {
  
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([]);

  const logString = (string) => {
    console.log("string is in APP", string);
  }

  return (
   
    <div className="App">
      <Search setSearchedMovie={setSearchedMovie} user="Chase" logString={logString}/>
      <DisplayMovie searchedMovie={searchedMovie} movieArray={movieArray} setMovieArray={setMovieArray} />
      <FavoriteMovies movieArray={movieArray} />
    </div>
  );
};

export default App;