import '../styling/jumbotron.scss';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'


function Jumbotron() {
  return (
    <div className="container-fluid" id="home">
        <div className="banner-row row justify-content-center">
            <div className="col-lg-5 theText">
                <Slide right>
                <h3>I'm <span>Iboro</span></h3>
                <h1>Code Architect</h1>
                </Slide>
                <Slide right>
                <p  className="mx-2">
                    I'm a Software Engineer and I love
                    to build amazing things using
                    various technologies. I'm a
                    creative thinker who is great at
                    problem solving and team work.
                </p>
                </Slide>
                <Fade top cascade>
                <div className="socialLinks mt-4">
                    <a href="#" target="_blank" className="px-4">
                        <img src="./instagram.png" alt="instagram logo"/>
                    </a>
                    <a href="#" target="_blank" className="px-4">
                        <img src="./twitter.png" alt="twitter logo"/>
                    </a>
                    <a href="#" target="_blank" className="px-4">
                        <img src="./github-sign.png" alt="github logo"/>
                    </a>
                    <a href="#" target="_blank"  className="pl-4">
                        <img src="./linkedin.png" alt="linkedin logo"/>
                    </a>
                </div>
                </Fade>
            </div>
            <Zoom>
            <div className="col-lg-6 me-image" style={{backgroundImage: 'url(./fifty.svg)'}}>

            </div>
            </Zoom>
        </div>
    </div>
  );
}

export default Jumbotron;
