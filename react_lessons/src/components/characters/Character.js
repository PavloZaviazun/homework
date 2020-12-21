import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PersonService from "../../services/people/PersonService";

class Character extends Component {

    person = new PersonService();
    state = {person: null};

    render() {
        let {person} = this.state;
        return (
            <div className={"absolute-position"}>

                {person &&
                <div>
                    <div><u>Name</u> : {person.name}</div>
                    <div><u>Height</u> : {person.height}</div>
                    <div><u>Mass</u> : {person.mass}</div>
                    <div><u>Gender</u> : {person.gender}</div>
                </div>

                }
            </div>
        );
    }

    async componentDidMount() {
        let {match: {params: {name}}} = this.props;
        return await this.person.getPerson(name).then(value => this.setState({person: value}))
    }

}

export default withRouter(Character);
