import React, {Component} from 'react';
import CommentsService from "../../services/CommentsService";
import Comment from "./comment/Comment";
import {Route, Switch, withRouter} from 'react-router-dom';
import DefiniteComment from "./comment/DefiniteComment";


class AllComments extends Component {

    comments = new CommentsService();

    state = {comments : []};

    render() {
        let {comments} = this.state;
        let {match:{url}} = this.props;
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
                {<div className={"forComments"}>
                    <Switch>
                        <Route path={url + "/:id"} render={(props) => {
                            const {match : {params : {id}}} = props;
                            return  <DefiniteComment key={id} commentID={id}/>
                        }}/>
                    </Switch>
                </div>}
            </div>
        );
    }

    async componentDidMount() {
        await this.comments.getComments().then(value => this.setState({comments: value}))
    }
}

export default withRouter(AllComments);
