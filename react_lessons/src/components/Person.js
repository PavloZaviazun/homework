import React, {Component} from 'react';

class Person extends Component {
    render() {
        let {person} = this.props;
        return (
            <div>
                {person.name}
            </div>
        );
    }
}

export default Person;
