import React, {Component} from 'react';
import User from "./components/user/User";
import {users} from "./usersDB/Users";


class App extends Component {
    render() {
        return (
            <div>
                {
                    users.map((value, index) => {
                        let styleCls = index % 2 ? "even" : "odd";
                        return <User
                        user={value}
                        key={index}
                        cls={styleCls}
                        />
                    })
                }
            </div>
        );
    }
}

export default App;
