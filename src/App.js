/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import ShowAllMovies from "./Components/ShowAllMovies/ShowAllMovies";

function App() {

    const apiKey = process.env.REACT_APP_API;

    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    
    const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <LandingPage
                            genres={genres}
                            trendingMoviesUrl={trendingMoviesUrl}
                            topRatedMoviesUrl={topRatedMoviesUrl}
                            upcomingMoviesUrl={upcomingMoviesUrl}
                        />
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
    );
}

export default App;