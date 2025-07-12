import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
// import Contact from './Contact';
// import About from './About';
// import Home from './Home';
import { Link, Route, Routes } from 'react-router-dom';


const LoadingComponent = () => <h3>Loading...</h3>

// Lazy load components using React's built-in lazy
const Home = lazy(() => import(
  /* webpackChunkName: "Home" */  
  './Home'));
const About = lazy(() => import(
  /* webpackChunkName: "About" */
  './About'));
const Contact = lazy(() => import(
  /* webpackChunkName: "Contact" */
  './Contact'));


function App() {
  return (
    <div className="App">
      <h1 className='error'>Webpack + React + Babel + JavaScript + CSS + SVG</h1>




      {/* Buttons */}
      <button><Link to="/home">Home</Link></button>
      <button><Link to="/about">About</Link></button>
      <button><Link to="/contact">Contact</Link></button>

      {/* Routes with Suspense wrapper */}
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>


      <div className='image-container'>
        <img src={logo} className='App-logo' alt="logo" />

      </div>
    </div>
  );
}

export default App;
