import React, {Component} from 'react';
import {PostService} from "../../services/PostService";

class Posts extends Component {

    postService = new PostService();

    state = {posts: [{title: "something"}]};

    render() {
        let {posts} = this.state;
        console.log(posts);
        return (
            <div>
                {posts.map(value => value.title)}
            </div>
        );
    }

    async getPostsOfUsers(id) {
       const posts =  await this.postService.getPosts(id);

       this.setState({posts})
    }

}

export default Posts;
