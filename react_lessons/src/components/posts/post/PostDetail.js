import React, {Component} from 'react';
import PostsService from "../../../services/PostsService";

class PostDetail extends Component {

    singlePost = new PostsService();

    state = {defPost: null};

    render() {
        let {defPost} = this.state;
        return (
            <div>
                {defPost && <h4>{defPost.title}</h4>}
                {defPost && <div>{defPost.body}</div>}
            </div>
        );
    }

    async componentDidMount() {
        let {idPost} = this.props;
        await this.singlePost.getPostsByID(idPost).then(value => this.setState({defPost: value}))
    }
}

export default PostDetail;
