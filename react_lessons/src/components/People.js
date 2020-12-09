import React, {Component} from 'react';
import PeopleService from "../services/PeopleService";
import Person from "./Person";

class People extends Component {

    people = new PeopleService();

    state = {people : []};

    render() {
        let {people} = this.state
        return (
            <div>
                {
                    people.map((person, index) => {
                        return <Person
                        key={index}
                        person={person}
                        />
                    })
                }
            </div>
        );
    }

componentDidMount() {
        this.people.getPeople().then(people => this.setState({people}))
}

}

export default People;
