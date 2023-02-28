import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { actions } from "./redux/store";

function App() {
  const [num, setNum] = useState(0);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(actions.increment());
  };
  const handleDecrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(num));
  };
  const reSet = () => {
    dispatch(actions.reSet(0));
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={addBy}>Add by </button>

      <input
        type="text"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <br />
      <button onClick={reSet}>Reset All</button>
    </div>
  );
}

export default App;
