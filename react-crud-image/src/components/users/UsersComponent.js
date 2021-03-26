import "./UsersComponent.css";
import {useEffect, useState} from "react";
import {UserService} from "../../services";
import {Link} from "react-router-dom";
import {UserComponent} from "../user";

export const UsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const userService = new UserService();
        userService.getUsers().then(el => {
            setUsers(el);
        });
    }, [flag])

    return (
            <div>
                <div>
                {users.length > 0 && users.map(user => {
                    return <UserComponent
                        key={user.id}
                        user={user}
                        setFlag={setFlag}
                        flag={flag}
                    />
                })}
                </div>
                <div className={"div-link-container"}>
                    <Link to={"/user/save"}>
                        <div className={"div-link"}>
                            <div>
                            Create user
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
    );
}
