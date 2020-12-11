import React, {Component} from 'react';
import UsersService from "../../services/UsersService";
import User from "./user/User";
import "./AllUsers.css";
import {Route, Switch, withRouter} from 'react-router-dom';
import UserDetails from "./user/UserDetails";

class AllUsers extends Component {
    users = new UsersService();
    state = {users : []};

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <User
                    key={value.id}
                    user={value}
                    />)
                }
                {
                    <div className={"output"}>
                        <Switch>
                            <Route path={`${url}/:id`} render={(props) => {
                                const {match: {params: {id}}} = props;
                                return <UserDetails userID={id} key={id}/>
                            }}/>
                        </Switch>
                    </div>
                }
            </div>
        );
    }

    async componentDidMount() {
        await this.users.getUsers().then(users => this.setState({users}))
    }

}

export default withRouter(AllUsers);
