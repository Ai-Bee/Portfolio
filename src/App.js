import './styling/App.scss';
import Jumbotron from './parts/jumbotron'
import { Routes, Route, Link } from "react-router-dom";
import About from './parts/about';
import Contact from './parts/contact';
import Projects  from './parts/projects';
import { useEffect } from 'react';
// import { useState } from 'react/cjs/react.development';

function App() {

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    let timeout;

    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      //cursor effects when mouse stopped
      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    //cursor effects when mouseout
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
  }, [])
  return (
    <div className="App">
     <div className="cursor"></div>
     <div className=' text-straight row'>
     {/* <span className='mb-2'>HOME</span> */}
          <span className="straight">||||||||||||||||||||||||||||||||||||</span>
          <a href="#"
            target="_blank" rel="noreferrer" className="col mb-4">
            <img src="./instagram.png" alt="instagram logo" />
          </a>
          <a href="#" rel="noreferrer"
            target="_blank" className=" mb-4 col">
            <img src="./twitter.png" alt="twitter logo" />
          </a>
          <a href="#" target="_blank"
            rel="noreferrer" className=" mb-4 col">
            <img src="./github-sign.png" alt="github logo" />

          </a>
          <a href="#" target="_blank" rel="noreferrer" className=" mb-4 col">
            <img src="./linkedin.png" alt="linkedin logo" />
          </a>
        </div>
     <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="about" element={  <About />} />
        <Route path="contact-me" element={  <Contact />} />
        <Route path="work" element={  <Projects />} /> 
      </Routes>
    </div>
  );
}

export default App;
