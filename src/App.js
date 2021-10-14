import './styling/App.scss';
import Jumbotron from './parts/jumbotron'
import TheNav from './parts/navPart';
import About from './parts/about';
import Contact from './parts/contact';
import Projects  from './parts/projects';

function App() {
  return (
    <div className="App">
        <Jumbotron/>
        <TheNav/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
