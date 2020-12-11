import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {post} = this.props;

        return (
            <div>
                {post.title}<br/>
                {post.body}
            </div>
        );
    }
}

export default Post;
