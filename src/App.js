import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useState, useRef } from 'react';
import ReactGA from 'react-ga4';
import { Fido, Home, Kan, Aboutme, Hyper, CustomCursor } from './pages';
import styles from './style';
ReactGA.initialize('G-B4YMGV71Q9');

const App = () => {
  // const cursor = useRef(null)
  //   const changePosition = (e) => {
  //       cursor.current.style.top = `${e.clientY}px`;
  //       cursor.current.style.left = `${e.clientX}px`;
  //   }

  return (
  <section className="w-full overflow-hidden">
    {/* <div className="cursor-style2" ref={cursor} ></div> */}
    <div className={`${styles.padding} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fido" element={<Fido />} />
          <Route exact path="/aboutme" element={<Aboutme />} />
          <Route exact path="/kan" element={<Kan />} />
          <Route exact path="/hyper" element={<Hyper />} />
        </Routes>   
      </div>
    </div>

  </section>
  )
};

export default App;
