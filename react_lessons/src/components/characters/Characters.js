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
    state ={character: 0}

    render() {
        let {idFilm} = this.props;
        let {character} = this.state;
        return (
            <div>
                <Router>
                    <Link to={`/films/${idFilm}/character/${character.name}`} className={"button-character"}>
                        {character.name}
                    </Link>
                    <Switch>
                        <Route path={`/films/${idFilm}/character/${character.name}`} render={() => <Character character={character}/>}/>
                    </Switch>
                </Router>
            </div>
        );
    }

    async componentDidMount() {
        let {url} = this.props;
        return await this.characterService.getCharacter(url).then(value => this.setState({character: value}))
    }

}

export default Characters;
