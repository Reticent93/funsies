import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [message, setMessage] = useState()

  const fetchData = async () => {
    const res = await axios.get('/.netlify/functions/hello')
    // console.log(res.data.message)
    setMessage(res.data.message)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
