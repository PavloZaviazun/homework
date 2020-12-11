import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "./user/User";
import {PostService} from "../../services/PostService";
import Post from "../posts/post/Post";

class Users extends Component {

    userService = new UserService();
    postService = new PostService();

    state = {users: [], post: null};
    render() {
        let {users, post} = this.state;
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
                {
                    post && <Post key={post.id} post={post}/>
                }
            </div>
        );
    }

    getID = (id) => {
        let random = Math.random()*((10 - 1) + 1);
        console.log(Math.ceil(random))
        let defPost;
        this.postService.getPosts(id).then(posts => posts.find( post => {
            if(post.id % 10) {
                if (Math.ceil(random) + (Math.floor(post.id / 10) * 10) === post.id) defPost = post;
            } else {
                if (Math.ceil(random) + (post.id / 10 - 1) * 10 === post.id) defPost = post;
            }
            return defPost;
        })).then(value => this.setState({post: value}))
    }

    componentDidMount() {
        this.userService.getUsers().then(value => this.setState({users: value}));
    }
}

export default Users;
