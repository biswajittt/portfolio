import './App.css';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Project from './components/project/Project';
import Skills from './components/skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Education />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
