import React, {Component} from 'react';
import CharacterService from "../../services/characters/CharacterService";
import "./Character.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import Character from "./Character";

class Characters extends Component {

    characterService = new CharacterService();
    state ={character: null}

    render() {
        let {idFilm} = this.props;
        let {character} = this.state;
        // console.log(this.props)
        return (
            <div className={"button-character"}>
                {character && <Link to={`/films/${idFilm}/character/${character.name}`} className={"characters"}>
                        {character.name}
                </Link>}
            </div>
        );
    }

    async componentDidMount() {
        let {url} = this.props;
        return await this.characterService.getCharacter(url).then(value => this.setState({character: value}))
    }

}

export default withRouter(Characters);
