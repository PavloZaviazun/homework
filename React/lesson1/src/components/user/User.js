import React, {Component} from 'react';
import "./User.css"

class User extends Component {
    render() {
        let {user, cls} = this.props;
        console.log(cls)
        return (
            <div className={cls}>
                {"{"}id: {user.id}, name: {"'"}{user.name}{"'"}, age: {user.age}, status: {user.status.toString()},
                address: {"{"}city: {user.address.city}, street: {user.address.street}, number: {user.address.number}{"}"}
            </div>
        );
    }
}

export default User;
