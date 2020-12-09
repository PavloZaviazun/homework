import React, {Component} from 'react';
import People from "./components/People";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <Link to={"/people"}>People</Link>
                </Router>
                <Switch>
                    <Route></Route>
                </Switch>
              <People/>
            </div>
        );
    }
}

export default App;
