import React, {Component} from 'react';
import UsersService from "../../services/UsersService";
import User from "./user/User";

class AllUsers extends Component {
    users = new UsersService();
    state = {users : []};

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(value => <User
                    key={value.id}
                    user={value}
                    />)
                }
            </div>
        );
    }

    async componentDidMount() {
        await this.users.getUsers().then(users => this.setState({users}))
    }

}

export default AllUsers;
