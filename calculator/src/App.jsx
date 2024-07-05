import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Keys from "./component/keys";
import Display from "./component/Display";
import { useState } from "react";

function App() {
  const [value, setvalue] = useState([""]);

  const display = (item) => {
    if (item === "=") {
      const result = eval(value);
      console.log(result);
      setvalue(result);
    } else if (item === "AC") {
      setvalue("");
    } else {
      console.log(item);
      const newv = value + item;
      setvalue(newv);
    }
  };

  return (
    <div className="calc-container">
      <h1>Calculator</h1>
      <Display value={value} />
      <Keys click={display} />
    </div>
  );
}

export default App;
