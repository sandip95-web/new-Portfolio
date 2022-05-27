import Header from './Components/HTML/Header';
import Navbar from './Components/HTML/Navbar';
import About from './Components/HTML/About';
import Experience from './Components/HTML/Experience'
import Material from './Components/HTML/Material'
import Projects from './Components/HTML/Projects'
import Contact from './Components/HTML/Contact'
import Footer from './Components/HTML/Footer'
import './style.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Material/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
