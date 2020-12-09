import React, {Component} from 'react';
import PostsService from "../../services/PostsService";
import Post from "./post/Post";

class AllPosts extends Component {

    posts = new PostsService();
    state = {posts : []};

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(value => {
                        return <Post
                        key={value.id}
                        post={value}
                        />
                    })
                }
            </div>
        );
    }

    async componentDidMount() {
        await this.posts.getPosts().then(posts => this.setState({posts}))
    }

}

export default AllPosts;
