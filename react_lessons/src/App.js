import React, {useState, useEffect, useReducer} from 'react';
import "./App.css"

const Test = () => {
    useEffect(() => {
        console.log("mount");
        const interval = setInterval(() => console.log("interval"), 1000);
        return () => {
            console.log("unMount")
            clearInterval(interval);
        }
    }, [])
    return ( <h1>Will be unmounted</h1>)

}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO_ITEM": {
            return action.payload
        }
        case "TOGGLE_TODO_COMPLETED": {
            return {
                ...state,
                completed: !state.completed
            };
        }
        case "TOGGLE_TITLE": {
            return {
                ...state,
                title: "her"
            }
        }
        case "RESET_TODO": {
            return null;
        }
        default: {
            console.error("not valid action", action.type);
            return state;
        }
    }
}

const initialState = null;

export default ({user : userFrom}) => {
    const [counter, setCounter] = useState(1);
    // const [todo, setTodo] = useState(null);
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + counter);
        const json = await response.json();
        dispatch({type: "SET_TODO_ITEM", payload: json});
    }

    useEffect(() => {
        console.log("her");
        fetchData();
        return () => {
            console.log("unMount")
        }
    }, [counter])

    const clickIncrement = () => {
        setCounter(prevState => prevState + 1);
    };

    const clickReset = () => {
        setCounter(1);
    }

    const clickResetTodo = () => {
        dispatch({type: "RESET_TODO"});
    }
    const clickToggleTodo = () => {
        dispatch({type: "TOGGLE_TODO_COMPLETED"});
    }
    const changeTitle = () => {
        dispatch({type: "TOGGLE_TITLE"});
    }

    return(
        <div className={"App"}>
            <h1>Counter: {counter}</h1>
            {counter !==2 && <Test/>}
            <button onClick={clickIncrement}>Increment</button>
            {/*<button onClick={clickReset}>Reset</button>*/}
            <button onClick={clickResetTodo}>ResetTodo</button>
            <button onClick={clickToggleTodo}>ToggleTodo</button>
            <button onClick={changeTitle}>Title</button>
            <input value={inputValue} onChange={({target : {value}}) => inputChange(value)}>


            {state &&
            <h2>{state.id} - {state.title} - {state.completed.toString()}</h2>}
        </div>
    );
}






















