import React from 'react';
import {useParams} from 'react-router-dom';

const MovieDetails = () => {

    const {slug} = useParams();



    return (
        <div>
            <h1>Movie Details - {slug}</h1>
        </div>
    );
};

/*
title
release_date
genre_ids
original_language
original_title
overview
popularity
vote_average
vote_count

*/

export default MovieDetails;