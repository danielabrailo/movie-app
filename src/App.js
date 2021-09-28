import "./App.css";
import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://swapi.dev/api/films"
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.results)
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("react-movie-app-favourites")
    );
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
    
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-favourites", JSON.stringify(items))
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.episode_id !== movie.episode_id);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  
  return (
    <div className= "container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Star Wars Movies"/>
      </div>
      <div className="col">
      <MovieList movies = {movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent= {AddFavourites} />
      </div>    
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourite Movies"/>
      </div>
      <div className="col">
      <MovieList movies = {favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent= {RemoveFavourites} />
      </div>  
    </div>
  );
};

export default App;