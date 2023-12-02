import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./compenets/header/Home";
import Contact from "./compenets/header/Contact";
import About from "./compenets/header/About";
import { Link } from "react-router-dom";
import "./App.css";
import Drop from "./compenets/header";
import Generic from "./compenets/Geners";

const App = () => {
  const [fetchDrop, setDrop] = useState([]);
  const FetchList = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDrop(data.genres);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    FetchList();
  }, []);

  return (
    <>
      <header>
        <h1>Movies</h1>
        <div className="navmenu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Drop fetchDrop={fetchDrop} />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/contact" element={<About />} />
        <Route path="/movies/gen/:id" element={<Generic />} />
      </Routes>
      <footer>THis is footer</footer>
    </>
  );
};
export default App;
