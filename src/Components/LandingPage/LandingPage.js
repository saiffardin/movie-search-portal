/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import ShowTenMovies from '../ShowTenMovies/ShowTenMovies';


const LandingPage = (props) => {
    /** data.results er 'keys' - 15
     * ['id', 'video', 'vote_average', 
     * 'overview', 'release_date', 'title', 
     * 'adult', 'backdrop_path', 'vote_count', '
     * genre_ids', 'poster_path', 'original_language', 
     * 'original_title', 'popularity', 'media_type']
     */

    const {genreUrl, trendingMoviesUrl, topRatedMoviesUrl, upcomingMoviesUrl} = props;

    // const apiKey = process.env.REACT_APP_API;

    const [genres, setGenres] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    // const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    // const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
    // const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    // const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

    useEffect(() => {

        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))

        fetch(trendingMoviesUrl)
            .then((data) => data.json())
            .then((res) => setTrendingMovies(res.results.slice(0, 10)))

        fetch(topRatedMoviesUrl)
            .then((data) => data.json())
            .then((res) => setTopRatedMovies(res.results.slice(0, 10)))

        fetch(upcomingMoviesUrl)
            .then((data) => data.json())
            .then((res) => setUpcomingMovies(res.results.slice(0, 10)))
    }, [])


    return (
        <div>
            <h1>Landing Page</h1>


            {/* Trending Movies */}
            <ShowTenMovies
                genres={genres}
                divBg="trending"
                sectionTitle="Trending Movies"
                movies={trendingMovies}
            />

            {/* Top Rated Movies */}
            <ShowTenMovies
                genres={genres}
                divBg="top-rated"
                sectionTitle="Top Rated Movies"
                movies={topRatedMovies}
            />

            {/* Upcoming Movies */}
            <ShowTenMovies
                genres={genres}
                divBg="upcoming"
                sectionTitle="Upcoming Movies"
                movies={upcomingMovies}
            />

            {/* ------------------------------------------------- */}

            {/* show all - trending */}
            {/* <ShowAllMovies
                genres={genres}
                divBg="trending"
                sectionTitle="Trending Movies"
                url={trendingMoviesUrl}
            /> */}

            {/* show all - top-rated */}
            {/* <ShowAllMovies
                genres={genres}
                divBg="top-rated"
                sectionTitle="Top Rated Movies"
                url={topRatedMoviesUrl}
            /> */}

            {/* show all - upcoming */}
            {/* <ShowAllMovies
                genres={genres}
                divBg="upcoming"
                sectionTitle="Upcoming Movies"
                url={upcomingMoviesUrl}
            /> */}
        </div>
    );
};

export default LandingPage;