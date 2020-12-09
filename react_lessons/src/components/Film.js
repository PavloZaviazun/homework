import React, {Component} from 'react';

class Film extends Component {
    render() {
        let {film} = this.props;
        return (
            <div>
                {film.title}
            </div>
        );
    }
}

export default Film;
