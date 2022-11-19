/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import NavbarSection from "./Components/NavbarSection/NavbarSection";

import TopMoviesList from "./Components/TopMoviesList/TopMoviesList";
import Wishlist from "./Components/Wishlist/Wishlist";

function App() {

    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const apiKey = process.env.REACT_APP_API;

        const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

        fetch(genreUrl)
            .then((data) => data.json())
            .then((res) => setGenres(res.genres))
    }, [])


    return (
        <Router>
            <div>
                <Switch>
                    {/* landing page */}
                    <Route exact path="/">
                        <NavbarSection navBg='light' genres={genres} />
                        <LandingPage />
                    </Route>

                    {/* landing page */}
                    <Route exact path="/movies">
                        <NavbarSection navBg='light' genres={genres} />
                        <LandingPage />
                    </Route>


                    {/* genre page */}
                    <Route exact path="/genre/:slug">
                        <NavbarSection navBg='dark' genres={genres} />
                        <TopMoviesList />
                    </Route>

                    {/* movie details page */}
                    <Route exact path={`/movies/:slug`}>
                        <NavbarSection navBg='dark' genres={genres} />
                        <MovieDetails />
                    </Route>

                    {/* wishlist page */}
                    <Route exact path={`/wishlist`}>
                        <NavbarSection navBg='dark' genres={genres} />
                        <Wishlist />
                    </Route>

                    <Route exact path="*">
                        <NavbarSection navBg='dark' genres={genres} />
                        <h1>404 - Not Found !!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;