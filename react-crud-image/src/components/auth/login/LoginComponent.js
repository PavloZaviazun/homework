import "../AuthComponent.css"
import {Link} from "react-router-dom";
import {UserService} from "../../../services";

export const LoginComponent = () => {

    const userService = new UserService();
    const sendData = (e) => {
        e.preventDefault();
        const form = document.forms.namedItem("userLogin");
        userService.loginUser(form);
    }

    return(
        <div >
            <div className={"profile-container"}>
                <div>
                    <div className={"profile-title"}>
                        <div>
                            Login
                        </div>
                    </div>
                    <form onSubmit={sendData} name={"userLogin"}>
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

                        <div className={"user-save"}>
                            <div>
                                <button>Sign up</button>
                            </div>
                        </div>
                    </form>
                    <div className={"register-button"}>
                        <div>
                            <Link to={"/registration"}>
                                <button>Registration</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

