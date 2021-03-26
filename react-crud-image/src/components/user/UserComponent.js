import "./UserComponent.css";
import {Link} from "react-router-dom";
import {UserService} from "../../services";

export const UserComponent = (props) => {
    const {user: {id, firstName, lastName}, setFlag, flag} = props;
    const userService = new UserService();


    const removeUser = () => {
        userService.removeUser(id).then(el => {
            if(el.status === 200) {
                setFlag(!flag);
            }
        });
    }

    return(
        <div className={"user-container"}>
            <div className={"user-data"}>
                <div className={"div-id"}>{id}</div>
                <div className={"div-name"}>{firstName} {lastName}</div>
                <div className={"div-link-container"}>{<Link to={`/user/${id}`}><div className={"div-link"}>details</div></Link>}</div>
            </div>
            <div className={"user-delete"}>
                <div className={"inner-user-delete"}><button onClick={removeUser}>delete</button></div>
            </div>
        </div>
    )
}


