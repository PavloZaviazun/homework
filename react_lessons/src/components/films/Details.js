import React, {Component} from 'react';
import "./Films.css"
import CharacterService from "../../services/characters/CharacterService";

class Details extends Component {

    characterService = new CharacterService();
    state = {characters:[]};

    render() {
        let {details} = this.props;
        let {characters} = this.state;
        console.log(characters)
        // console.log(details.characters)
        return (
            <div className={"details"}>
                <u>Director</u> : {details.director}<br/>
                <u>Producer</u> : {details.producer}<br/>
                <u>Release</u> : {details.release_date}<br/>
                <u>Heroes</u> : { characters.name

                // this.getChar()

                // characters.map(value => value.name)

                // details.characters.map(url => this.details.getChar(url))


                }
            </div>
        );
    }


    async componentDidMount() {
        let {details} = this.props;

        await details.characters.map(url => {
            return this.characterService.getCharacter(url).then(characters => this.setState({characters}))

            })

    }


}

export default Details;
