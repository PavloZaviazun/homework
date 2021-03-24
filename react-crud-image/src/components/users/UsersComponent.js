import "./UsersComponent.css"
import {Link} from "react-router-dom";

export const UsersComponent = (props) => {
    const {user: {id, firstName, lastName}} = props;

    return(
        <div className={"div-user"}>
            {id} - {firstName} {lastName} - {<Link to={`/user/${id}`}>detail</Link>}
        </div>
    )
}


