/* eslint-disable react-hooks/exhaustive-deps */
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import TopMoviesList from "./Components/TopMoviesList/TopMoviesList";

function App() {

    return (
        <Router>
            <div>
                <Switch>
                    {/* landing page */}
                    <Route exact path="/">
                        <LandingPage />
                    </Route>

                    {/* landing page */}
                    <Route exact path="/movies">
                        <LandingPage />
                    </Route>


                    {/* genre page */}
                    <Route exact path="/genre/:slug">
                        <TopMoviesList />
                    </Route>

                    {/* movie details page */}
                    <Route exact path={`/movies/:slug`}>
                        <MovieDetails />
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