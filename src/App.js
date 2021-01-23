import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import "../src/App.css";
function App() {
  const [advise, setAdvise] = useState("");
  function fetchAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        console.log(response);
        setAdvise(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchAdvice();
  });
  return (
    <div className="app">
      <div className="card">
        <header className="heading">{advise}</header>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVISE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
