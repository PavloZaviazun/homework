import React, {Component} from 'react';
import {users} from "./databse/UsersDB";
import User from "./components/user/User";

class App extends Component {
    render() {
        return (
            <div>
                {
                    users.map((value, index) => {
                        let style = index % 2 ? "even" : "odd";
                        return <User
                            key={value.id}
                            user={value}
                            cls={style}
                        />
                    })
                }
            </div>
        );
    }
}

export default App;
