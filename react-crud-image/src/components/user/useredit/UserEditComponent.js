import {withRouter} from 'react-router-dom';
import {useEffect, useState} from "react";
import {UserService} from "../../../services";
import "../UserComponent.css";

export const UserEditComponent = (props) => {
    const id = props.match.params.id;
    const [user, setUser] = useState({firstName: "", lastName: "", age: "", email: "", password: "", avatar: ""});
    const {firstName, lastName, age, email, password, avatar} = user;
    const userService = new UserService();
    const SERVER= "http://localhost:8080";


    useEffect(() => {
        userService.getUser(id).then(el => {
            setUser(el);
        });
    }, []);

    const sendData = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("userForm");
        userService.updateUser(id, form).then(el => {
            if(el.status === 200) {
                props.history.push(`/user/${id}`);
            }
        });
    }

    const removeUser = () => {
        userService.removeUser(id).then(el => {
            if(el.status === 200) {
                props.history.push("/info")
            }
        });
    }

    return(
        <div>
            <div className={"profile-container"}>
                <form onSubmit={sendData} name={"userForm"}>
                    <div>
                        <div className={"profile-title"}>
                            <div>
                                User #{id} edition
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>First name:</div>
                                <div className={"div-value"}><input type={"text"} defaultValue={`${firstName}`} name={"firstName"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Last name:</div>
                                <div className={"div-value"}><input type={"text"} defaultValue={`${lastName}`} name={"lastName"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Age:</div>
                                <div className={"div-value"}><input type={"text"} defaultValue={`${age}`} name={"age"} required={"required"} pattern={"[0-9]{1,2}"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>E-mail:</div>
                                <div className={"div-value"}><input type={"text"} defaultValue={`${email}`} name={"email"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Password:</div>
                                <div className={"div-value"}><input type={"text"} defaultValue={`${password}`} name={"password"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Avatar:</div>
                                <div className={"div-value"}><input type={"file"} defaultValue={`${avatar}`} name={"avatar"}/></div>
                            </div>
                        </div>
                        <div className={"user-save"}>
                            <div>
                                <button>Save changes</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                <div className={"user-delete custom-height"}><button onClick={removeUser}>Delete account</button></div>
                <div>{avatar && <img src={`${SERVER}/avatars/${avatar}`} className={"avatar"}
                                     alt={`avatar-user${id}`}/>}</div>
                </div>
            </div>
        </div>
    )
}

withRouter(UserEditComponent)


