import "./App.css";
import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
import MovieDetails from "./components/MovieDetails";
import MovieTitleList from "./components/MovieTitleList";
import ShowDetails from "./components/ShowDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [details, setDetails] = useState([]);

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
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items))
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

  const showDetails = (movie) => {
    const detailsList = [movie];
    setDetails(detailsList);
  }


  
  return (
    <div className="container">

    <div className= "container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Star Wars Movies"/>
      </div>
      <div className="col">
      <MovieTitleList movies = {movies} handleDetailsClick={showDetails} textComponent={ShowDetails}/>
      </div>    
      
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourite Movies"/>
      </div>
      <div className="col">
      <MovieList movies = {favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent= {RemoveFavourites} />
      </div>  
    </div>

    <div className= "container-right-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movie Details"/>
      </div>
      <div className="col">
      <MovieDetails movies = {details} handleFavouritesClick={addFavouriteMovie} favouriteComponent= {AddFavourites} />
      </div>       
     
    </div>
    </div>
  );
};

export default App;
