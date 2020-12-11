import React, {Component} from 'react';
import UsersService from "../../../services/UsersService";

class UserDetails extends Component {

    definiteUser = new UsersService();
    state = {defUser: null};

    render() {
        let {defUser} = this.state;
        return (
            <div>
                {defUser && <div>{defUser.name} - {defUser.email} - {defUser.website}</div>}
            </div>
        );
    }

    async componentDidMount() {
        let {userID} = this.props;
        await this.definiteUser.getUsersByID(userID).then(value => this.setState({defUser: value}))
    }
}

export default UserDetails;
