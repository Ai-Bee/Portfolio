import { useState } from 'react';
import '../styling/about.scss';
// import Slide from 'react-reveal/Slide'

function About() {
  let [current, setCurrent] = useState('one');
  
  let toggle = (e, arg) => {
    e.preventDefault();
    setCurrent(arg)
  }
  return (
    <div>
      <div id="aboutPage" className="about-row row justify-content-center">
        <div className='aboutBody'>
          <div className='row justify-content-start align-content-center'>
            <div className='col-sm-7 first-col mt-4 pt-4'>
              <h2 className='text-start'>About Me</h2>
              <h5 className='text-start'>
                I'm <span className='name'>Iboro,</span><br />
                <span>Software Engineer,</span> <br />
                <span>Web3 Enthusiast,</span>  <br />
                <span>Problem Solver...</span></h5>
              <p className='text-start'>
                I've been a lover of all things tech as long as I can recall. Thanks to my background a computer science and also intentional interest, I have indepth knowledge of not just coding but <span>software engineering</span> and software development processes.
              </p>
              <p className='text-start'>
                I've been debugging and building solutions for the web since <span>2018</span>. My first official job was at
                <span>
                  <a href='https://ehealth4everyone.com/' target="_blank" rel='noreferrer'> ehealth4everyone</a>
                </span> where I built new features and maintained existing solutions for the front end. I especially worked on one of their major applications,  <span>
                  <a href='https://msdat.fmohconnect.gov.ng' target="_blank" rel='noreferrer'>MSDAT</a></span>, a health analytics Dashboard. I also worked on other projects and learnt a lot.
              </p>
              <p className='text-start'>
                Since then I've taken on numerous freelance projects and I've moved on to work for other institutions, including <span>Kora Technologies</span>, and also an internship with <span>TIIDELab Initiative</span>. This has given me to opportunity to work extensively with a range of technologies including but not limited to latest <span>ES6-ECMAScript 2018,</span> <span>SCSS, GIT, VUE, REACT, NUXT, Web flow, NEXT </span> and <span>jQuery.</span> I'm also <span>Web3</span> enthusiast delving into <span>solidity</span> and <span>dApps.</span>
              </p>
              <p className='text-start'>
                What excites me most about being a front end developer is being able to design and create things that have purpose and improve web experiences. I like to find a <span> balance between having a beautiful UI and actually being functional and having great UX.</span>
              </p>
              <h4 className='text-start my-4'>My Work Experience</h4>
              <div className="row">
                <div className="col-3">
                  <div className="nav flex-column workArea">
                    <button onClick={e => toggle(e, 'one')} className={`css-button-sharp--sky ${current === 'one' ? "active" : "inActive"}`}>Kora Technologies</button>
                    <button onClick={e => toggle(e, 'two')} className={`css-button-sharp--sky ${current === 'two' ? "active" : "inActive"}`}>ehealth4everyone</button>
                    <button onClick={e => toggle(e, 'three')} className={`css-button-sharp--sky ${current === 'three' ? "active" : "inActive"}`}>TIIDELab</button>
                    <button  onClick={e => toggle(e, 'four')} className={`css-button-sharp--sky ${current === 'four' ? "active" : "inActive"}`}>Sterling Bank</button>
                  </div>
                </div>
                <div className="col-9">
                  <div className="tab-content">
                    <div className={`tab-pane fade show ${current === 'one' ? "active" : ""}`} role="tabpanel" aria-labelledby="v-pills-home-tab">  
                      <ul className='text-start'>
                        <li> Built UI reusable components and complete       layouts using React.js and Nuxt.Js</li>
                        <li>
                        Worked with the team to ensure Web app efficiency and scalability
                        </li>
                      </ul>
                      </div>
                    <div className={`tab-pane fade show ${current === 'two' ? "active" : ""}`} role="tabpanel" >
                      <ul className='text-start'>
                        <li> Maintained various websites to ensure efficiency</li>
                        <li>Made use of Highcharts.js to visualize data</li>
                        <li>Improved website speed through the use of GZip and other strategies</li>
                        <li>Built features according to specified mockups and requirements</li>
                        <li>Ensured website smooth running by fixing bugs</li>
                      </ul>
                    </div>
                    <div className={`tab-pane fade show ${current === 'three' ? "active" : ""}`} role="tabpanel" >
                      <ul className='text-start'>
                        <li>Worked alongside a team to build a Dashboard for hospital appointments</li>
              
                      </ul>  
                    </div>
                    <div className={`tab-pane fade show ${current === 'four' ? "active" : ""}`} role="tabpanel" >
                    <ul className='text-start'>
                      <li>Developing new web-based products according to user requirements</li>
                      <li>Codebase updates and maintenance</li>
                        <li>Building new features and fixing bugs as and when needed</li>
                      </ul>  
                    </div>
                  </div>
                </div>
              </div>
              <h4 className='text-start my-4'>Skills</h4>
              <div className='row my-3 skills'>
              <ul className='col'>
                <li className='py-2 m-1'>
                  VUE
                </li>
                <li className='py-2 m-1'>
                ECMAScript 2018
                </li>
                <li className='py-2 m-1'>
                  Javascript
                </li>
                <li className='py-2 m-1'>
                  REACT
                </li>
              </ul>
              <ul className='col'>
                <li className='py-2 m-1'>
                  NUXT
                </li>
                <li className='py-2 m-1'>
                NEXT
                </li>
                <li className='py-2 m-1'>
                 GIT
                </li>
                <li className='py-2 m-1'>
                  SCSS
                </li>
              </ul>
              <ul className='col'>
                <li className='py-2 m-1'>
                  Webflow
                </li>
                <li className='py-2 m-1'>
                  VUETIFY
                </li>
                <li className='py-2 m-1'>
                  TYPESCRIPT
                </li>
                <li className='py-2 m-1'>
                  jQuery
                </li>
              </ul> 
              </div>
           <button className='css-button-sharp--grey mb-5'>
           <a href="https://www.canva.com/design/DAEnwTxiTLE/poexZgIQ0rbyYIfxhoVocg/view?utm_content=DAEnwTxiTLE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            rel="noreferrer"
            target="_blank">
           VIEW MY CV
          </a></button>
            </div>
            <div className='col'>
              images come here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
