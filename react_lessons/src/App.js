import React, {Component} from 'react';
import People from "./components/People";
import Planets from "./components/Planets";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Films from "./components/Films";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <div><Link to={"/people"}>People</Link></div>
                <div><Link to={"/planets"}>Planets</Link></div>
                <div><Link to={"/films"}>Films</Link></div>
                <Switch>
                    <Route path={"/people"} render={() => <People/>}/>
                    <Route path={"/planets"} render={() => <Planets/>}/>
                    <Route path={"/films"} render={() => <Films/>}/>
                </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
