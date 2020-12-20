import React, {Component} from 'react';
import "./Films.css"
import Characters from "../characters/Characters";
import {Route, Switch, withRouter} from 'react-router-dom';
import Character from "../characters/Character";

class Details extends Component {

    state = {characters:[]};

    render() {
        let {details} = this.props;
        return (
            <div className={"details"}>
                <u>Director</u> : {details.director}<br/>
                <u>Producer</u> : {details.producer}<br/>
                <u>Release</u> : {details.release_date}<br/>
                <u>Heroes</u> : {


                        <div className={"button-area"}>
                        {details.characters.map((url, index) => <Characters key={index} url={url} idFilm={details.episode_id}/>)}

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
}

export default withRouter(Details);
