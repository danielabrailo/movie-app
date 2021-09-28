import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
        {props.movies.map((movie, index) => (
            <div className="name-container d-flex flex-column justify-content-center mb-3">
                <p>{movie.title}</p>
                <div onClick={() => props.handleFavouritesClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <FavouriteComponent/>
                </div>
            </div>
                       
        ))}
        </>
    );
};

export default MovieList;