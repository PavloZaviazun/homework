import React, {Component} from 'react';
import {UsersService} from "../../services/UsersService";

class AllUsers extends Component {
    users = new UsersService();
    users.getUsers();

    render() {
        return (
            <div>
                Full Users
            </div>
        );
    }

}

export default AllUsers;
