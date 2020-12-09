import React, {Component} from 'react';
import CommentsService from "../../services/CommentsService";
import Comment from "./comment/Comment";

class AllComments extends Component {

    comments = new CommentsService();

    state = {comments : []};

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map((value, index) => {
                        let color = index % 2 ? "odd" : "even";
                        return <Comment
                        key={value.id}
                        comment={value}
                        cls={color}
                        />
                    })
                }
            </div>
        );
    }

    async componentDidMount() {
        await this.comments.getComments().then(value => this.setState({comments: value}))
    }
}

export default AllComments;
