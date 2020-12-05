import React, {Component} from 'react';
import "./Post.css"


class Post extends Component {
    render() {
        let {post , chooseOne, noButton} = this.props;
        return (
            <div>
                <h4 className={"titleClass"}>{post.title}</h4>
                <div className={"bodyClass"}>{post.body}</div>
                {
                    !noButton &&
                    <button className={"buttonClass"} onClick={() => chooseOne(post.id)}>Choose this</button>
                }
                <hr/>
            </div>
        );
    }
}

export default Post;
