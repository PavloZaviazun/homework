import React, {Component} from 'react';
import CommentsService from "../../../services/CommentsService";

class DefiniteComment extends Component {

    singleComment = new CommentsService();
    state = {defComment : null};

    render() {
        let {defComment} = this.state;
        return (
            <div>
                {defComment && <h5>{defComment.name}</h5>}
                {defComment && <div>{defComment.body}</div>}
            </div>
        );
    }

    async componentDidMount() {
        let {commentID} = this.props;
        await this.singleComment.getCommentsByID(commentID).then(value => this.setState({defComment: value}))
    }

}

export default DefiniteComment;
