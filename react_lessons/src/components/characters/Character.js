import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';
import CharacterService from "../../services/characters/CharacterService";
import PersonService from "../../services/people/PersonService";

class Character extends Component {

    person = new PersonService();
    state = {person: null};

    render() {
        // console.log(this.props)
        let {match: {params: {id}}} = this.props;
        let {person} = this.state;
        return (
            <div className={"absolute-position"}>
                {id}
                {person && person.height}
            </div>
        );
    }

    async componentDidMount() {
        console.log("b")
        let {match: {params: {id}}} = this.props;
        return await this.person.getPerson(id).then(value => this.setState({person: value}))
    }

}

export default withRouter(Character);
