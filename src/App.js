import "./App.css";
import { useEffect, useState } from "react";
import RandomMovie from "./components/RandomMovie";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import RandomMovieWParams from "./components/RandomMovieWParams";
import Watchlist from "./components/Watchlist";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url(https://payload.cargocollective.com/1/11/367710/13568488/MOVIECLASSICSerikweb_2500_800.jpg)`,
      //   backgroundSize: "cover",
      //   height: "100vh",
      //   width: "100vw",
      // }}
    >
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/randomMovie" element={<RandomMovie />} />
        <Route path="/randomMovieWithParams" element={<RandomMovieWParams />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </div>
  );
}

export default App;
