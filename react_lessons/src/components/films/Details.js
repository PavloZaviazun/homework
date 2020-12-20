import React, {Component} from 'react';
import "./Films.css"
import Characters from "../characters/Characters";
import {Route, Switch, withRouter} from 'react-router-dom';
import Character from "../characters/Character";
import CharacterService from "../../services/characters/CharacterService";

class Details extends Component {

    state = {characters:[]};



    render() {
        let {characters} = this.state;
        let {details} = this.props;
        console.log(characters);

        return (
            <div className={"details"}>
                <u>Director</u> : {details.director}<br/>
                <u>Producer</u> : {details.producer}<br/>
                <u>Release</u> : {details.release_date}<br/>
                <u>Heroes</u> : {


                        <div className={"button-area"}>
                        {details.characters.map((url, index) => {
                            return <Characters
                                key={index}
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
        let filter = details.characters.filter(value => value !== apiUrl);
        this.setState({characters :filter})
    }

}

export default withRouter(Details);
