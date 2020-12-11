import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';

class Person extends Component {
    render() {
        let {person, index, match:{url}} = this.props;
        return (
            <div>
                {person.name} - <Link to={`${url}/${index}`}>info</Link>
            </div>
        );
    }
}

export default withRouter(Person);

