import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Apods from "./Apods";
import Apod from "./Apod";
import NoMatch from "./NoMatch";

function App() {
  const [apods, setApods] = useState([]);
  const navigate = useNavigate();
  const [userId, setUserId] = useState()
  const [apod, setApod] = useState()

  async function selectUser(user) {
    const response = await fetch(`http://localhost:9292/users/${user.id}/apods`);
    const json = await response.json();
    console.log(json);
    setApods(json);
    setUserId(user);
    navigate("/apods");
  };

  function imageClick(apod) {
    setApod(apod);
    navigate("/apod");
  }

  return (
    <>
      <h1 className="header">NASA Astronomy Pictures of Your Birth Day</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users selectUser={selectUser} />} />
        <Route path="/apods" element={<Apods apods={apods} user={userId} imageClick={imageClick} />} />
        <Route path="/apod" element={<Apod apod={apod} user={userId} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App;
