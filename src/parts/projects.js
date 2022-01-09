import '../styling/projects.scss';
import Fade from 'react-reveal/Fade'

function Projects() {
  return (
    <div className="container-fluid" id="projectPage">
        <h4 className="text-start py-3">Some of my recent work</h4>
        <Fade cascade top>
       <ul className="array row">
       <li class="carded">
            <img src="./inclusive.PNG" alt="gdgd"/>
            <h3>Inclusive Learning Hub</h3>
            <div class="focus-content">
                 <a 
                 href="https://inclusivelearninghub.com"
                 target="_blank">View</a>
            </div>
        </li>
        <li class="carded">
            <img src="./motionware.PNG" alt="gdgd"/>
            <h3>Motionware Replica</h3>
            <div class="focus-content">
                 <a target="_blank" href="https://suspicious-liskov-bfb3ec.netlify.app/#/profilePage">View</a>
            </div>
        </li>
        <li class="carded">
            <img src="./producthunt.PNG" alt="gdgd"/>
            <h3>Product Hunt</h3>
            <div class="focus-content">
                 <a target="_blank" href="https://the-product-hunt.netlify.app">View</a>
            </div>
        </li>
        <li class="carded">
            <img src="./msdat.PNG" alt="gdgd"/>
            <h3>MSDAT</h3>
            <div class="focus-content">
                 <a target="_blank" href="https://msdat.fmohconnect.gov.ng/central_analytics">View</a>
            </div>
        </li>
        <li class="carded">
            <img src="./rccg.PNG" alt="gdgd"/>
            <h3>RCCG BCC</h3>
            <div class="focus-content">
                 <a target="_blank" href="https://rccgbcc.org">View</a>
            </div>
        </li>
        {/* <li class="carded">
            <img src="./wayapay.PNG" alt="gdgd"/>
            <h3>Wayapay</h3>
            <div class="focus-content">
                 <a target="_blank" href="http://website.waya-group.com/">View</a>
            </div>
        </li> */}
        {/* <li class="carded">
            <img src="./procleaners.PNG" alt="gdgd"/>
            <h3>PROCLEANERS</h3>
            <div class="focus-content">
                 <a target="_blank" href="https://zealous-jennings-22812f.netlify.app/">View</a>
            </div>
        </li> */}
        <li class="carded">
            <img src="./quizapp.PNG" alt="gdgd"/>
            <h3>Quiz App</h3>
            <div class="focus-content">
                 <a target="blank" href="https://trusting-williams-041224.netlify.app">View</a>
            </div>
        </li>
       </ul>
       </Fade>
    </div>
  );
}

export default Projects;
