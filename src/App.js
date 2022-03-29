import './styling/App.scss';
import Jumbotron from './parts/jumbotron'
import TheNav from './parts/navPart';
import About from './parts/about';
import Contact from './parts/contact';
import Projects  from './parts/projects';
import { useEffect } from 'react';

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
        <Jumbotron/>
        <TheNav/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
