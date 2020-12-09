import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "./user/User";
import Posts from "../posts/Posts";

class Users extends Component {

    userService = new UserService();
    posts = new Posts();

    state = {users: []};
    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(user => {
                        return <User
                        key={user.id}
                        user={user}
                        getID={this.getID}
                        />
                    })
                }
            </div>
        );
    }

    getID = (id) => {
        this.posts.getPostsOfUsers(id);
    }

    componentDidMount() {
        this.userService.getUsers().then(value => this.setState({users: value}));
    }
}

export default Users;
