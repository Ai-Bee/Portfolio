import '../styling/contact.scss';

function Contact() {
  return (
    <div className="container-fluid" id="contactPage">
        <div className="banner-row row justify-content-center">
            <div className="col-lg-6 me-image" style={{backgroundImage: 'url(./newest.png)'}}>
        
            </div>
            <div className="col-lg-6 theTexts">
                <h1>contact me</h1>
                <p>Do you speak Javascript? That's fine
                  <br/>
                   I speak enough for both of us </p>
                <div className="row social-row pl-4 ml-4">
                    <a href="#"
                     target="_blank" rel="noreferrer" className="col">
                        <span><img src="./instagram.png" alt="instagram logo"/></span>
                        instagram
                    </a>
                    <a href="#" rel="noreferrer"
                    target="_blank" className=" col">
                       <span> <img src="./twitter.png" alt="twitter logo"/>
                       </span> twitter
                    </a>
                  </div>
                <div className="row social-row">
                    <a href="#" target="_blank"
                     rel="noreferrer" className=" col">
                       <span> <img src="./github-sign.png" alt="github logo"/>
                       </span>
                       email
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="col">
                       <span> <img src="./linkedin.png" alt="linkedin logo"/> </span> linkediIn
                    </a>
                </div>
            </div>
        </div>
        <div className="row final pt-4" id="docPart">
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
        </div>
    </div>
  );
}

export default Contact;
