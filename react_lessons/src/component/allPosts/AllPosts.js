import React, {Component} from 'react';
import Post from "../post/Post";
import "./AllPosts.css"
import {PostService} from "../../services/PostService";


class AllPosts extends Component {

    postService = new PostService();

    state = ({posts: [], chosenOne: null})

    render() {
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {
                    chosenOne && <div className={"chosenOne"}><Post post={chosenOne} noButton={true}/></div>
                }
                {posts.map(posts => {
                    return <Post
                    key={posts.id}
                    post={posts}
                    chooseOne={this.chooseOne}
                    />
                })}
            </div>
        );
    }

    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value}));
    }

    chooseOne = (id) => {
        let {posts} = this.state;
        let findPost = posts.find(post => post.id === id);
        this.setState({chosenOne: findPost})
    }
}

export default AllPosts;
