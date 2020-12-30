import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {addPhrase, removePhrase} from "./redux/reducer/action-creators";

function App() {

  const dispatch = useDispatch();
  const store = useSelector(state => state);

  function takePhrase(event) {
      event.preventDefault();
      console.log("a")

  }

    let inputValue = null;
    let removeValue = null;

  const handleSubmitAdd = (event: React.FormEvent) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      dispatch(addPhrase(formData.get("inputValue")));
  }

    function handleSubmitRemove(event: React.FormEvent) {
        event.preventDefault();
        const formSelector = new FormData(event.target);
        dispatch(removePhrase(+formSelector.get("selector")));
    }

  return (
      <div className={"mainDiv"}>
        <form onSubmit={handleSubmitAdd}>
        <div><input placeholder={"input text"} className={"inputStyle"} name={"inputValue"}/>
        <button className={"buttonStyle"}>Add to list</button></div>
        </form>
          <form onSubmit={handleSubmitRemove}>
        <div><select className={"selectStyle"} name={"selector"}>
                {store.phrases.map((phrase, index) =>
                    <option value={index} key={index}> {phrase} </option>)}
            </select>
            <button className={"buttonStyle"} >Remove</button>
        </div>
          </form>
      </div>
  )
}

export default App;
