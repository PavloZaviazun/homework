import React, {Component} from 'react';
import "./Films.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import Film from "./Film";

class Films extends Component {
    render() {
        let {films, getIDFilm} = this.props;
        // console.log(films)
        return (
            <div>
                <Router>
                    <div className={"filmsPosition"}><div>{films.title}</div><div><Link to={`/films/${films.episode_id}`} className ={"button"} onClick={() => getIDFilm(films.episode_id)}>Details</Link></div></div>
                    {/*<Switch>*/}
                    {/*    <Route to={`/films/${films.episode_id}`} render={() => <Film/>}/>*/}
                    {/*</Switch>*/}
                </Router>
            </div>
        );
    }
}

export default Films;
