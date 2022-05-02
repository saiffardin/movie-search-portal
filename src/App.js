/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';

function App() {



    // console.log(genres);

    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <h2>Home</h2>
                    </Route>
                    <Route path="/about">
                        <h2>About</h2>
                    </Route>
                    <Route path="/users">
                        <h2>Users</h2>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}



export default App;
