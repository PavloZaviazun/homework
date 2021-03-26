import {UserService} from "../../../services";
import "../UserComponent.css";

export const UserCreateComponent = (props) => {
    const userService = new UserService();

    const sendData = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("userForm");
        userService.saveUser(form).then(el => {
            if(el.status === 200) {
                props.history.push(`/users`);
            }
        });
    }

    return(
        <div>
            <form onSubmit={sendData} name={"userForm"}>
                <div className={"profile-container"}>
                    <div>
                        <div className={"profile-title"}>
                            <div>
                                New user creation
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>First name:</div>
                                <div className={"div-value"}><input type={"text"} placeholder={"Enter first name"} name={"firstName"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Last name:</div>
                                <div className={"div-value"}><input type={"text"} placeholder={"Enter last name"} name={"lastName"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Age:</div>
                                <div className={"div-value"}><input type={"text"} placeholder={"Enter age"} name={"age"} required={"required"} pattern={"[0-9]{1,2}"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>E-mail:</div>
                                <div className={"div-value"}><input type={"text"} placeholder={"Enter e-mail"} name={"email"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Password:</div>
                                <div className={"div-value"}><input type={"text"} placeholder={"Enter password"} name={"password"} required={"required"}/></div>
                            </div>
                        </div>
                        <div className={"user-container profile"}>
                            <div className={"user-data"}>
                                <div className={"div-parameter"}>Avatar:</div>
                                <div className={"div-value"}><input type={"file"} name={"avatar"}/></div>
                            </div>
                        </div>
                        <div className={"user-save"}>
                            <div>
                            <button>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}



