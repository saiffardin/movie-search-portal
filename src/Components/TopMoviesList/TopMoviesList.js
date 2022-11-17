import React from 'react';
import {useParams} from 'react-router-dom';

const TopMoviesList = () => {

    let {slug} = useParams();

    return (
        <div>
            <h1>Top 10 Movies - {slug}</h1>
        </div>
    );
};

export default TopMoviesList;