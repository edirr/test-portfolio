import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import Projects from './components/Projects/Projects';
import About from  './components/About/About';
import PriorExperience from  './components/PriorExperience/PriorExperience';
import Contact from  './components/Contact/Contact';

function App(){
  return(
    <div className='App'>
      <NavBar />
      <div className='container'>
        <LandingPage />
        <About />
        <Projects/>
        <PriorExperience/>
        <Contact/>
      </div>
    </div>
  )
}

export default App;