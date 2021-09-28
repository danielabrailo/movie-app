import React from 'react';

const MovieTitleList = (props) => {
    const TextComponent = props.textComponent;
    return (
        <>
        {props.movies.map((movie, index) => (
            <div className="name-container d-flex flex-column justify-content-center mb-3">
                <p>{movie.title}</p>
                <div onClick={() => props.handleDetailsClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                    <TextComponent/>
                </div>               
            </div>                       
        ))}
        </>
    );
};

export default MovieTitleList;