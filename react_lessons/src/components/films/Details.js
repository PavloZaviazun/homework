import React, {Component} from 'react';
import "./Films.css"
import CharacterService from "../../services/characters/CharacterService";
import Characters from "../characters/Characters";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import Character from "../characters/Character";

class Details extends Component {

    state = {characters:[]};

    render() {
        let {details} = this.props;
        // console.log(details)
        // let {characters} = this.state;
        // console.log(characters)
        // console.log(characters)
        // console.log(details.characters)
        return (
            <div className={"details"}>
                <u>Director</u> : {details.director}<br/>
                <u>Producer</u> : {details.producer}<br/>
                <u>Release</u> : {details.release_date}<br/>
                <u>Heroes</u> : {

                    <Router>

                        {details.characters.map((url, index) => <Characters key={index} url={url} idFilm={details.episode_id}/>)}

                        <Switch>
                            <Route path={`/films/${details.episode_id}/character/:id`} render={() => <Character/>}/>
                        </Switch>
                    </Router>

                }
            </div>
        );
    }



}

export default Details;
