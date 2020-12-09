import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';

class Post extends Component {
    render() {
        let {post, match: {url}} = this.props;
        return (
            <div>
                {post.title} - <Link to={`${url}/${post.id}`}>details</Link>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Post);
