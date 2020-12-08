import React, {Component} from 'react';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

class App extends Component {
    render() {
        return (
            <div>
              <Users />
              <Posts />
            </div>
        );
    }
}

export default App;
