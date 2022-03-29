import '../styling/jumbotron.scss';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'


function Jumbotron() {
  return (
    <div className="container-fluid" id="home">
        <div class="bars" id="nav-action">
  <span class="bar"> </span>
</div>
      <div className="banner-row row justify-content-center" style={{ backgroundImage: 'url(./illustration.png)' }}>
        <div className='col text-straight row'>
          
          <span className="straight">|||||||||||||||||||||||||||||||||||</span>
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
              <h1>WORK</h1>
              <h1>ABOUT</h1>
              <h1>CONTACT</h1>
            </div>

          </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Jumbotron;
