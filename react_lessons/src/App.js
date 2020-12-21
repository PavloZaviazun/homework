import React, {Component} from 'react';
import UserService from "./components/UserService";
import "./App.css"

class App extends Component {

    inputMain = React.createRef();
    state = {inputValue : "", user : null, buttonCondition : true};
    userService = new UserService();

    myFunction = () => {
        this.setState({inputValue : this.inputMain.current.value, buttonCondition : false});
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.userService.getUser(this.inputMain.current.value).then(value => {
            this.setState({user : value});
        })
    }

    render() {
        let {inputValue, user, buttonCondition} = this.state;
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                <input ref={this.inputMain} onInput={this.myFunction} type={"number"} value={inputValue} min={1} max={10}/>
                <button disabled={buttonCondition}>Confirm</button>
                </form>
                {user && <div className={"output"}>{user.id} - {user.name} - {user.email} - {user.website}</div>}
            </div>
        );
    }
}

export default App;
