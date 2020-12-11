import React, {Component} from 'react';
import "./App.css";
import AllUsers from "./components/users/AllUsers";
import AllComments from "./components/comments/AllComments";
import AllPosts from "./components/posts/AllPosts";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

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
                    <Route path={"/users"} render={() => <AllUsers/>}/>
                    <Route path={"/posts"} render={() => <AllPosts/>}/>
                    <Route path={"/comments"} render={() => <AllComments/>}/>
                  </Switch>
                </div>
              </div>
            </Router>
        );
    }
}

export default App;

