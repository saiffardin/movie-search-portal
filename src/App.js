/* eslint-disable react-hooks/exhaustive-deps */
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

    return (
        <Router>
            <div>
                <Switch>
                    {/* landing page */}
                    <Route exact path="/">
                        <NavbarSection navBg='light' />
                        <LandingPage />
                    </Route>

                    {/* landing page */}
                    <Route exact path="/movies">
                        <NavbarSection navBg='light' />
                        <LandingPage />
                    </Route>


                    {/* genre page */}
                    <Route exact path="/genre/:slug">
                        <NavbarSection navBg='dark' />
                        <TopMoviesList />
                    </Route>

                    {/* movie details page */}
                    <Route exact path={`/movies/:slug`}>
                        <NavbarSection navBg='dark' />
                        <MovieDetails />
                    </Route>

                    {/* wishlist page */}
                    <Route exact path={`/wishlist`}>
                        <NavbarSection navBg='dark' />
                        <Wishlist />
                    </Route>

                    <Route exact path="*">
                        <NavbarSection navBg='dark' />
                        <h1>404 - Not Found !!</h1>
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;