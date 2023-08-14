import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Fido, Home } from './pages';
import styles from './style';

const App = () => (
  
  <section className="w-full overflow-hidden">
    <div className={`${styles.padding} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fido" element={<Fido />} />
        </Routes>   
      </div>
    </div>

  </section>
);

export default App;
