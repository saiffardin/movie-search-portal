/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import ShowFiveMovies from '../ShowEightMovies/ShowFiveMovies';

const GenreSpecificMovies = (props) => {

    const {genres} = props;

    const apiKey = process.env.REACT_APP_API;

    const testUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;

    const [oneGenreMovies, setOneGenreMovies] = useState([]);


    useEffect(() => {

        fetch(testUrl)
            .then((data) => data.json())
            .then((res) => {
                console.log('res saif:', res.results)
            })

        fetch(testUrl)
            .then((data) => data.json())
            .then((res) => setOneGenreMovies(res.results.slice(0, 5)))
    }, [])


    return (
        <div>
            <ShowFiveMovies genres={genres}
                divBg="trending"
                sectionTitle="One Genre only - test"
                movies={oneGenreMovies} />
        </div>
    );
};

export default GenreSpecificMovies;