import React, {Component} from 'react';

class Character extends Component {
    render() {
        let {character} = this.props;
        return (
            <div className={"absolute-position"}>
                {character.name}
            </div>
        );
    }
}

export default Character;
