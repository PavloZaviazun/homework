import React, {Component} from 'react';
import Post from "../post/Post";

class AllPosts extends Component {

    state = ({posts: [], chosenOne: null})

    render() {
        let {posts, chosenOne} = this.state;
        return (
            <div>
                {/*{*/}
                {/*    chosenOne && <h2>{chosenOne.title}</h2>*/}
                {/*}*/}
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
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(postsFromAPI => postsFromAPI.json())
            .then(postsFromAPI => {
                return this.setState({posts: postsFromAPI})
            })
    }

    chooseOne(id) {
        // let {posts} = this.state;
        console.log(id)
        // let findPost = posts.find(post => post.id === id);
        // this.setState({chosenOne: findPost})
        // console.log(findPost.title)
        // this.setState({chosenOne: findPost});
    }
}

export default AllPosts;
