import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {addPhrase, removePhrase} from "./redux/reducer/action-creators";

function App() {

  const dispatch = useDispatch();
  const store = useSelector(state => state);

  function takePhrase() {
    dispatch(addPhrase(inputValue));
  }

  function deletePhrase() {
    dispatch(removePhrase(removeValue));
  }

  let inputValue = null;
  let removeValue = null;

  return (
      <div className={"mainDiv"}>
        <div><input placeholder={"input text"} className={"inputStyle"} onChange={e => {
          inputValue = e.target.value;
        }} />
        <button className={"buttonStyle"} onClick={() => takePhrase()}>Add to list</button></div>
        <div>
            <select className={"selectStyle"} onChange={e => {
                removeValue = e.target.value;
            }}>
                {store.phrases.map((phrase, index) => <option value={phrase} key={index}> {phrase} </option>)}
            </select>
            <button className={"buttonStyle"} onClick={() => deletePhrase()}>Remove</button>
        </div>
      </div>
  )
}

export default App;
