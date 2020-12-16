import React, {Component} from 'react';
import "./Films.css"
import CharacterService from "../../services/characters/CharacterService";
import Characters from "../characters/Characters";

class Details extends Component {

    state = {characters:[]};

    render() {
        let {details} = this.props;
        let {characters} = this.state;
        // console.log(characters)
        // console.log(details.characters)
        return (
            <div className={"details"}>
                <u>Director</u> : {details.director}<br/>
                <u>Producer</u> : {details.producer}<br/>
                <u>Release</u> : {details.release_date}<br/>
                <u>Heroes</u> : {
                <div className={"characters"}>
                    {
                        details.characters.map((url, index) => <Characters key={index} url={url} idFilm={details.episode_id}/>)
                    }
                </div>



                }
            </div>
        );
    }



}

export default Details;
