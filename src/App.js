import './styling/App.scss';
import Jumbotron from './parts/jumbotron'
import { Routes, Route } from "react-router-dom";
import About from './parts/about';
import Contact from './parts/contact';
import Projects  from './parts/projects';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function App(props) {
  let navigate = useNavigate();
  const pathname = window.location.pathname
  const goHome = () => {
    navigate("/");
  }

  let dynamicHome = () => {
    if(pathname == '/') {
      return <div>
         <span className="straight">|||||||||||||||||||||||||||||||||||</span>
      </div>
    } else {
      return <div>
      <a href="#" onClick={goHome} className="mt-4 mb-4 col">
           <img src="./home.png" alt="twitter logo" />
         </a>
         <span className="straight">|||||||||||||||||||||||</span>
      </div>
    }
  }

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
     <div className='text-straight row'>
      {
        dynamicHome()
      }
        <a href="https://twitter.com/ai_bee__" rel="noreferrer"
          target="_blank" className=" mb-4 col">
          <img src="./twitter.png" alt="twitter logo" />
        </a>
        <a href="https://github.com/Ai-Bee" target="_blank"
          rel="noreferrer" className=" mb-4 col">
          <img src="./github-sign.png" alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/iboro-inyang/" target="_blank" rel="noreferrer" className=" mb-4 col">
          <img src="./linkedin.png" alt="linkedin logo" />
        </a>
        <a href="https://medium.com/@iboroinyang01"
          target="_blank" rel="noreferrer" className="col mb-4">
          <img src="./medium.png" alt="medium logo" />
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
