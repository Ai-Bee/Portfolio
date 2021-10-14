import '../styling/navs.scss';

function TheNav() {
  return (
    
    <nav className="navbar navbar-expand sticky-top sticky-bottom navbar-light bg-light">
  <div className="collapse navbar-collapse justify-content-center text-center" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item px-4 active">
        <a className="nav-link" href="#home">home </a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#aboutPage">about</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#docPart">docs</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#projectPage">projects</a>
      </li>
      <li className="nav-item px-4">
        <a className="nav-link" href="#contactPage">contact</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default TheNav;
