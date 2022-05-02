/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {

    const apiKey = process.env.REACT_APP_API;

    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
    const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
    const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

    // console.log(genres);

    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/">
                        <LandingPage
                            genreUrl={genreUrl}
                            trendingMoviesUrl={trendingMoviesUrl}
                            topRatedMoviesUrl={topRatedMoviesUrl}
                            upcomingMoviesUrl={upcomingMoviesUrl}
                        />
                    </Route>

                    <Route exact path={`/trending/view-all`}>
                        <h3>trending - view all</h3>
                    </Route>

                    <Route exact path={`/top-rated/view-all`}>
                        <h3>top-rated - view all</h3>
                    </Route>

                    <Route exact path={`/upcoming/view-all`}>
                        <h3>upcoming - view all</h3>
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
