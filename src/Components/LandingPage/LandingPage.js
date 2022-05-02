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

    const {genres, trendingMoviesUrl, topRatedMoviesUrl, upcomingMoviesUrl} = props;


    
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);


    useEffect(() => {

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

            

            

            
        </div>
    );
};

export default LandingPage;