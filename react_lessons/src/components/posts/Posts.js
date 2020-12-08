import React, {Component} from 'react';
import {PostService} from "../../services/PostService";

class Posts extends Component {

    postService = new PostService();

    state = ({posts: [{title: "something"}]});

    render() {
        let {posts} = this.state;
        console.log(posts);
        return (
            <div>
                {posts.map(value => value.title)}
            </div>
        );
    }

    getPostsOfUsers(id) {
        this.postService.getPosts(id).then(value =>{
            console.log(value)
            this.setState({posts: value})})
    }

}

export default Posts;
