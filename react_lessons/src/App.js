import React, {Component} from 'react';
import "./App.css";
import AllUsers from "./components/users/AllUsers";
import AllComments from "./components/comments/AllComments";
import AllPosts from "./components/posts/AllPosts";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <div><Link to={"/users"}>Users</Link></div>
                <div><Link to={"/posts"}>Posts</Link></div>
                <div><Link to={"/comments"}>Comments</Link></div>
                <div className = "container">
                  <Switch>
                    <Route path={"/users"}>
                      <AllUsers/>
                    </Route>
                    <Route path={"/posts"}>
                      <AllPosts/>
                    </Route>
                    <Route path={"/comments"}>
                      <AllComments/>
                    </Route>
                  </Switch>
                </div>
              </div>
            </Router>
        );
    }
}

export default App;

