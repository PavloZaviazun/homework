import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

class Films extends Component {
    render() {
        let {films} = this.props;
        console.log(films)
        return (
            <div>
                {films.title}  <Link to={"/films/1"}>details</Link>
            </div>
        );
    }
}

export default Films;
