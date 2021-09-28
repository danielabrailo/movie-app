import React from "react";

const MovieDetails = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
        {props.movies.map((movie, index) => (
            <div className="name-container d-flex flex-column justify-content-center mb-3">
                <h2>{movie.title}</h2>
                <p>{movie.opening_crawl}</p>
                <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <FavouriteComponent/>
                </div>
            </div>
                       
        ))}
        </>
    );
};

export default MovieDetails;