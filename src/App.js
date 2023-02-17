import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/Main';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import Certificate from './components/Certificate';
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">
       <Chat/>
     <Main/>
     <Banner/>
     <Skills/>
     <Projects/>
     <Certificate/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
