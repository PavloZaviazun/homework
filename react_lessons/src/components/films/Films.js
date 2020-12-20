import React, {Component} from 'react';
import "./Films.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';

class Films extends Component {
    render() {
        let {films, getIDFilm} = this.props;
        return (
            <div>
                <Router>
                    <div className={"filmsPosition"}><div>{films.title}</div><div><Link to={`/films/${films.episode_id}`} className ={"button"} onClick={() => getIDFilm(films.episode_id)}>Details</Link></div></div>
                </Router>
            </div>
        );
    }
}

export default Films;
