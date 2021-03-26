import {Link, withRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import {UserService} from "../../../services";
import "../UserComponent.css";

export const UserInfo = (props) => {
    const [user, setUser] = useState({});
    const {firstName, lastName, age, email, password, avatar} = user;
    const id = props.match.params.id;
    const userService = new UserService();
    const SERVER= "http://localhost:8080";

    useEffect(() => {
        userService.getUser(id).then(el => {
            setUser(el);
        });
    }, [id])

    return (
        <div> {user.id > 0 && <div>
            <div className={"profile-container"}>
                <div>
                    <div className={"profile-title"}>
                        <div>
                            User #{user.id}
                        </div>
                    </div>
                    <div className={"user-container profile"}>
                        <div className={"user-data"}>
                            <div className={"div-parameter"}>First name:</div>
                            <div className={"div-value"}>{firstName}</div>
                        </div>
                    </div>
                    <div className={"user-container profile"}>
                        <div className={"user-data"}>
                            <div className={"div-parameter"}>Last name:</div>
                            <div className={"div-value"}>{lastName}</div>
                        </div>
                    </div>
                    <div className={"user-container profile"}>
                        <div className={"user-data"}>
                            <div className={"div-parameter"}>Age:</div>
                            <div className={"div-value"}>{age}</div>
                        </div>
                    </div>
                    <div className={"user-container profile"}>
                        <div className={"user-data"}>
                            <div className={"div-parameter"}>E-mail:</div>
                            <div className={"div-value"}>{email}</div>
                        </div>
                    </div>
                    <div className={"user-container profile"}>
                        <div className={"user-data"}>
                            <div className={"div-parameter"}>Password:</div>
                            <div className={"div-value"}>{password}</div>
                        </div>
                    </div>
                    <div className={"div-link-container"}>
                        <Link to={`/user/update/${id}`}>
                            <div className={"div-link"}>
                                <div>
                                    Edit profile
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className={"avatar"}><img src={`${SERVER}/avatars/${avatar}`} className={"avatar"}
                                               alt={`avatar-user${id}`}/></div>
            </div>

        </div>}
        </div>
    )
}
withRouter(UserInfo);
