import '../styling/jumbotron.scss';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import { useNavigate } from "react-router-dom";


function Jumbotron() {
  let navigate = useNavigate();
  const goToWork = () => {
    navigate("/work");
  }
  const goToAbout = () => {
    navigate("/about");
  }
  const goToContact = () => {
    navigate("/contact-me");
  }
  return (
    <div className="container-fluid" id="home">
        {/* <div class="bars" id="nav-action">
  <span class="bar"> </span>
</div> */}
      <div className="banner-row row justify-content-center" style={{ backgroundImage: 'url(./illustration.png)' }}>
       
        <div className="col-lg-5 theText">
         
          <Slide right>
            <h3>I'm <span>Iboro</span></h3>
            <h1>Code Architect</h1>
          </Slide>
          <Slide right>
            <p className="mx-2">
              I'm a Software Engineer and I love
              to build amazing things using
              various technologies. I'm a
              creative thinker who is great at
              problem solving and team work.
            </p>
          </Slide>
          <Fade top cascade>
          </Fade>
        </div>
        <Zoom>
          <div className="col-lg-6 me-image" >

            <div className='texts'>
              <h1 onClick={goToWork}>WORK</h1>
              <h1 onClick={goToAbout}>ABOUT</h1>
              <h1 onClick={goToContact}>CONTACT</h1>
            </div>

          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Jumbotron;
