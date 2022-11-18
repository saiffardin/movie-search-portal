/* eslint-disable react-hooks/exhaustive-deps */
import {createContext, useEffect, useState} from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import ShowAllMovies from "./Components/ShowAllMovies/ShowAllMovies";
import TopMoviesList from "./Components/TopMoviesList/TopMoviesList";

export const CentralDataContext = createContext();


function App() {

    const apiKey = process.env.REACT_APP_API;

    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

    const [genres, setGenres] = useState([]);
    const [genreWiseMovies, setGenreWiseMovies] = useState([]);
    const stylesDivBg = ['bgBlue', 'bgGrey', 'bgGreenish'];



    useEffect(() => {
        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])

    useEffect(() => {

        // eslint-disable-next-line array-callback-return
        genres.map((singleGenre) => {
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${singleGenre.id}`;

            fetch(url)
                .then((data) => data.json())
                .then((res) => {
                    setGenreWiseMovies((prevState => {
                        return [
                            ...prevState,
                            {
                                genreId: singleGenre.id,
                                genreName: singleGenre.name,
                                movies: res.results.slice(0, 10)
                            }
                        ]
                    }))
                })
        })

    }, [genres])

    return (
        <CentralDataContext.Provider value={{genres, genreWiseMovies, stylesDivBg}}>
            <Router>
                <div>
                    <Switch>
                        {/* landing page */}
                        <Route exact path="/">
                            <LandingPage
                                genres={genres}
                                genreWiseMovies={genreWiseMovies}

                                trendingMoviesUrl={trendingMoviesUrl}
                                topRatedMoviesUrl={topRatedMoviesUrl}
                                upcomingMoviesUrl={upcomingMoviesUrl}
                            />
                        </Route>

                        {/* landing page */}
                        <Route exact path="/movies">
                            <LandingPage
                                genres={genres}
                                genreWiseMovies={genreWiseMovies}
                            />
                        </Route>


                        {/* genre page */}
                        <Route exact path="/genre/:slug">
                            <TopMoviesList />
                        </Route>

                        {/* movie details page */}
                        <Route exact path={`/movies/:slug`}>
                            <MovieDetails />
                        </Route>


                        <Route exact path={`/trending/view-all`}>
                            {/* show all - trending */}
                            <ShowAllMovies
                                genres={genres}
                                divBg="trending"
                                sectionTitle="Trending Movies"
                                url={trendingMoviesUrl}
                            />
                        </Route>

                        <Route exact path={`/top-rated/view-all`}>
                            {/* show all - top-rated */}
                            <ShowAllMovies
                                genres={genres}
                                divBg="top-rated"
                                sectionTitle="Top Rated Movies"
                                url={topRatedMoviesUrl}
                            />
                        </Route>

                        <Route exact path={`/upcoming/view-all`}>
                            {/* show all - upcoming */}
                            <ShowAllMovies
                                genres={genres}
                                divBg="upcoming"
                                sectionTitle="Upcoming Movies"
                                url={upcomingMoviesUrl}
                            />
                        </Route>

                        <Route exact path="*">
                            <h1>404 - Not Found !!</h1>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </CentralDataContext.Provider>
    );
}

export default App;