import React, {Component} from 'react';
import CharacterService from "../../services/characters/CharacterService";
import "./Character.css"
import {Link, withRouter} from 'react-router-dom';

class Characters extends Component {

    characterService = new CharacterService();
    state ={character: null}

    render() {
        let {idFilm, getDeleteName} = this.props;
        let {character} = this.state;

        return (
            <div className={"button-character"}>
                {character && <Link to={`/films/${idFilm}/character/${character.name}`} className={"characters"}>
                        {character.name}
                </Link>}
                <button onClick={() => getDeleteName(character.url)}>her</button>
            </div>


        );
    }

    async componentDidMount() {
        let {url} = this.props;
        return await this.characterService.getCharacter(url).then(value => this.setState({character: value}))
    }

}

export default withRouter(Characters);
