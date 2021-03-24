import {withRouter} from "react-router-dom";
import {useState, useEffect} from "react";
import {UserService} from "../../services";

export const UserEditComponent = (props) => {
    const id = props.match.params.id;
    const [user, setUser] = useState({firstName: "", lastName: "", age: ""});
    const {firstName, lastName, age, email, password, avatar} = user;
    const userService = new UserService();

    useEffect(() => {
        userService.getUser(id).then(el => {
            setUser(el);
            console.log(user);
        });
    }, []);

    const handleFirstName = (e) => {
        user.firstName = e.target.value

        console.log(user);
        setUser(user);
    }

    const sendData = (e) => {
        e.preventDefault();
        userService.updateUser(id, user.firstName);
    }

    return(
        <div>
            Editing of User #{id}
            <form onSubmit={sendData}>
                FirstName: <input type={"text"} defaultValue={`${firstName}`} onChange={handleFirstName}/><br/>
                {/*LastName: <input type={"text"} value={`${lastName}`}/><br/>*/}
                {/*Age: <input type={"text"} value={`${age}`}/><br/>*/}
                {/*E-mail: <input type={"text"} value={`${email}`}/><br/>*/}
                {/*Password: <input type={"text"} value={`${password}`}/><br/>*/}
                <button>Save changes</button>
            </form>
        </div>
    )
}

withRouter(UserEditComponent)


