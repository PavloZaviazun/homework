import {Link, withRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import {UserService} from "../../services";
import "./UserComponent.css"

export const UserComponent = (props) => {
    const[user, setUser] = useState({});
    const {firstName, lastName, age, email, password, avatar} = user;
    const id = props.match.params.id;
    const userService = new UserService();

    useEffect(() => {
        userService.getUser(id).then(el => {
            setUser(el);
        });
    }, [id])

    return(
        <div> {user.id > 0 &&
            <table className={"table"}>
                <thead>
                <tr>
                    <th colSpan={3}>User #{user.id}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>First name</td>
                    <td>{firstName}</td>
                    <td rowSpan={5}><img src={userService.getAvatar(avatar)} className={"avatar"}
                                         alt={`avatar-user${id}`}/></td>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{age}</td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{password}</td>
                </tr>
                <tr>
                    <td><Link to={`/user/update/${id}`}>Edit profile</Link></td>
                    <td></td>
                </tr>
                </tbody>
            </table>}
        </div>
    )
}
withRouter(UserComponent);
