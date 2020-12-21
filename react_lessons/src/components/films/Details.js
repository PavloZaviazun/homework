import React, {Component} from 'react';
import "./Films.css"
import Characters from "../characters/Characters";
import {Route, Switch, withRouter} from 'react-router-dom';
import Character from "../characters/Character";
import CharacterService from "../../services/characters/CharacterService";

class Details extends Component {

    state = {characters:[], forDelete: []};



    render() {
        let {characters} = this.state;
        let {details} = this.props;

        return (
            <div className={"details"}>
                <u>Director</u> : {details.director}<br/>
                <u>Producer</u> : {details.producer}<br/>
                <u>Release</u> : {details.release_date}<br/>
                <u>Heroes</u> : {


                        <div className={"button-area"}>
                        {characters.map((url, index) => {
                            let id = url.slice(-3).replaceAll("/", "");
                            return <Characters
                                key={id}
                                url={url}
                                idFilm={details.episode_id}
                                getDeleteName={this.getDeleteName}
                            />
                        })}

                        <Switch>
                            <Route path={`/films/${details.episode_id}/character/:name`} render={(props) => {
                                let {match :{params:{name}}} = props;
                                return <Character key={name}/>
                            }}/>
                        </Switch>
                        </div>
                }
            </div>
        );
    }

    componentDidMount() {
        let {details} = this.props;
        this.setState({characters : details.characters});
    }

    character = new CharacterService();
    getDeleteName = (apiUrl) => {
        let {details} = this.props;
        let {forDelete} = this.state;
        forDelete.push(apiUrl);
        let filter = details.characters;
        for (let i = 0; i < forDelete.length; i++) {
            filter = filter.filter(value => value !== forDelete[i])
        }
        this.setState({characters: filter})
    }
}

export default withRouter(Details);
