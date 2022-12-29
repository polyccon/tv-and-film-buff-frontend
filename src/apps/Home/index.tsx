import React, { useState } from "react";
import FILM from '../../assets/film-image.png';
import './Home.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={FILM} className="" alt="logo" />
        <p>Choose your favourite films and series from</p>
        <a
          className="App-link"
          href="https://www.imdb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDB
        </a>
      </header>
    </div>
  );
}

export default Home;
