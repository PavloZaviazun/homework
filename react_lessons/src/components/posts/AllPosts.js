import React, {Component} from 'react';
import PostsService from "../../services/PostsService";
import Post from "./post/Post";
import "./forPost.css"
import {Route, Switch, withRouter} from 'react-router-dom';
import PostDetail from "./post/PostDetail";

class AllPosts extends Component {

    posts = new PostsService();
    state = {posts : []};

    render() {
        let {posts} = this.state;
        let {match : {url}} = this.props;
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
                <div className={"forPost"}>
                    <Switch>
                        <Route path={url + "/:idPost"} render={(props) => {
                            const {match : {params: {idPost}}} = props;
                            return <PostDetail key={idPost} idPost={idPost}/>
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }

    async componentDidMount() {
        await this.posts.getPosts().then(posts => this.setState({posts}))
    }

}

export default withRouter(AllPosts);
