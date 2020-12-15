import React, {Component} from 'react';
import "./Films.css";
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
                <Router>
                    <div className={"filmsPosition"}><div>{films.title}</div><div><Link to={"/films/1"} className ={"button"}>Details</Link></div></div>
                    <Switch>
                        {/*<Route to={}/>*/}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Films;
