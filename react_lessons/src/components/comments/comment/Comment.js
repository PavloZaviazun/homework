import React, {Component} from 'react';
import "./Comment.css"
import {Link, withRouter} from 'react-router-dom';

class Comment extends Component {
    render() {
        let {comment, match: {url}, cls} = this.props;
        return (
            <div className={cls}>
                {comment.name} - {comment.email} - <Link to={`${url}/${comment.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);
