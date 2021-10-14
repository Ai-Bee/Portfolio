import '../styling/about.scss';
import Slide from 'react-reveal/Slide'

function About() {
  return (
    <div>
         <div id="aboutPage" className="about-row row justify-content-center">
             <div className="childOne col-lg-5 text-end pt-3">
                 <div className='py-4 mt-4'>
                 <h2>I'm an awesome techie... 😎 Just FYI</h2>
                <p>I enjoy building web experiences that are not only functional but that that users can enjoy using 👨‍🎨, isn't is just a pain in the neck when you're using a webpage and you just can't figure out where the heck is happening? 😵  </p>
                 </div>
                 <div className='py-1'>
                <Slide>
                 <h4>That being said...</h4>
                 <p>
                     Some of the qualities that I take <br/> into consideration doing my job include
                  </p>
                </Slide>
                  <Slide left cascade>
                <ul>
                  <li>
                  ✨ Intuitive and expressive user interface
                  </li>
                  <li>
                  ♻️ Scalable and maintable codebase
                    </li>
                  <li>
                  🎚️ Accessible for all kinds of users 
                  </li>
                  <li>
                  👌 Responsive across all devices
                  </li>
                  <li>
                  🆗 Top industry standard code 
                  </li>
                  <li>
                  ⚙️ Well and truly functional
                  </li>
                  <li>
                  😍 Cool User Experience
                  </li>
                  <li>
                  🔍 Great SEO
                  </li>
                  <li>
                  🔐 Security
                  </li>
                </ul>
                </Slide>
                 </div>
                </div>
                <Slide right cascade>
                <ul className="childTwo col-lg-5">
                  <li>
                <p className='text-start langs-text'>Javascript</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: '95%'}}aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>React</p>
            <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>Vue</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>jQuery</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>CSS and SCSS</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '88%'}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>Nuxt</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>Typescript</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>Vuetify</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '78%'}} aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>Node</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
            <li>
            <p className='text-start langs-text'>Express</p>
            <div class="progress">
            <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </li>
        </ul>
        </Slide>
             </div>
    </div>
  );
}

export default About;
