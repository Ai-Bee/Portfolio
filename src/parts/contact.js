import '../styling/contact.scss';

function Contact() {
  return (
    <div className="container-fluid" id="contactPage">
      <div class="loop-wrapper">
  <div class="mountain"></div>
  <div class="hill"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="tree"></div>
  <div class="rock"></div>
  <div class="truck"></div>
  <div class="wheels"></div>
</div> 
      <div className="banner-row row justify-content-center">
        <div className="col-lg-6 theTexts">
          <h1>contact me</h1>
          <p>Do you speak Javascript? That's fine
            <br />
            I speak enough for both of us </p>
          <div className="row social-row justify-content-center">
            <button className='col-sm-9 col-md-5 css-button-arrow--sky'>
            <a href="mailto:iboroinyang01@gmail.com">Say Hello
            </a>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="row final pt-4" id="docPart">
        <div className="col pt-4 pl-4">
          <a
            href="https://medium.com/@iboroinyang01"
            rel="noreferrer"
            target="_blank">
            <img src="./medium.png" alt="medium icon" />
          </a>
        </div>
        <div className="col pt-4 pr-4">
          <a href="https://www.canva.com/design/DAEnwTxiTLE/xfgS4UapXnoL2ybYIr1YBw/view?utm_content=DAEnwTxiTLE&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
            rel="noreferrer"
            target="_blank">
            <img src="./cv.png" alt="cv icon" />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
