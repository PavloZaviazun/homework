import React, {Component} from 'react';
import PeopleService from "../services/PeopleService";

class People extends Component {

    people = new PeopleService();

    state = {people : []};

    render() {
        return (
            <div>
                lol
            </div>
        );
    }

    componentDidMount() {
         this.people.getPeople()
             .then(people => this.setState({people}))
    }
}

export default People;
