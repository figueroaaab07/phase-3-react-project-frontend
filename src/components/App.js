import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Apods from "./Apods";
import Apod from "./Apod";
import NoMatch from "./NoMatch";

function App() {
  const [apods, setApods] = useState([]);

  async function selectUser(id) {
    const response = await fetch(`http://localhost:9292/users/${id}/apods`);
    const json = await response.json();
    console.log(json);
    setApods(apods => apods.concat(json));
  };

  return (
    <>
      <h1 className="header">NASA Astronomy Pictures of Your Birth Day</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users selectUser={selectUser} />} />
        <Route path="/apods" element={<Apods apods={apods}/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App;
