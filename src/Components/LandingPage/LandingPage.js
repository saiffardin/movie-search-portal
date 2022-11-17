/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import GenreSpecificMovies from '../GenreSpecificMovies/GenreSpecificMovies';
// import ShowFiveMovies from '../ShowEightMovies/ShowFiveMovies';

const LandingPage = (props) => {

    const {genres, trendingMoviesUrl, topRatedMoviesUrl, upcomingMoviesUrl} = props;

    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {

        fetch(trendingMoviesUrl)
            .then((data) => data.json())
            .then((res) => setTrendingMovies(res.results.slice(0, 8)))

        fetch(topRatedMoviesUrl)
            .then((data) => data.json())
            .then((res) => setTopRatedMovies(res.results.slice(0, 8)))

        fetch(upcomingMoviesUrl)
            .then((data) => data.json())
            .then((res) => setUpcomingMovies(res.results.slice(0, 8)))

    }, [])

    // --------------------------------------------

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

    // console.clear();

    console.log('-----------------------')

    console.log('trendingMovies:', trendingMovies)
    console.log('oneGenreMovies:', oneGenreMovies)


    return (
        <div>

            <GenreSpecificMovies genres={genres} />

            {/* Trending Movies */}
            {/* <ShowEightMovies
                genres={genres}
                divBg="trending"
                sectionTitle="Trending Movies"
                movies={trendingMovies}
            /> */}

            {/* Top Rated Movies */}
            {/* <ShowEightMovies
                genres={genres}
                divBg="top-rated"
                sectionTitle="Top Rated Movies"
                movies={topRatedMovies}
            /> */}

            {/* Upcoming Movies */}
            {/* <ShowEightMovies
                genres={genres}
                divBg="upcoming"
                sectionTitle="Upcoming Movies"
                movies={upcomingMovies}
            /> */}

        </div>
    );
};

export default LandingPage;