import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Header from './pages/Header';
import { useSelector } from "react-redux"
import './App.css';

function AnimatedRoutes() {
  const MenuBarShow = useSelector(state => state.MenuBarReducer.value)
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={1000}
        classNames="page"
      >
        <div className={`page overflow-x-hidden`}>
          <Header></Header>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <div className="page-container">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
