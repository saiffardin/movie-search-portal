/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import GenreSpecificMovies from '../GenreSpecificMovies/GenreSpecificMovies';
// import ShowFiveMovies from '../ShowEightMovies/ShowFiveMovies';

const LandingPage = (props) => {

    const {trendingMoviesUrl, topRatedMoviesUrl, upcomingMoviesUrl} = props;



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




    return (
        <div>

            <GenreSpecificMovies />

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