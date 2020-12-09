import React, {Component} from 'react';
import "./User.css"

class User extends Component {

    render() {
        let {user, getID} = this.props;
        return (
            <div>
                <div>{user.name} - {user.email} - {user.website}</div>
                    <button onClick={() => getID(user.id)}>Random post</button>zz
                    <hr/>
            </div>
        );
    }
}

export default User;
