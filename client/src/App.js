import {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const send = () => {
   if(name){
    fetch(`/api/${name}`)
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setData(data.message);
      })
      .catch((e) => console.log(e));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "write your name..." : data}</p>
        <input onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>send()}>Send</button>
      </header>
    </div>
  );
}

export default App;
