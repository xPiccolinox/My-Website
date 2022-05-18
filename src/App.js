import { useState } from 'react'
import './App.css';
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'

function App() {
  const [language, setLanguage] = useState(0)
  const languages = ['english', 'polish']

  const changeLanguage = () => {
    if (language == languages.length - 1) setLanguage(0)
    else setLanguage(language + 1)
  }

  return (
    <div className="App">
      <Navbar language={language} changeLanguage={changeLanguage}/>
      <Projects />
    </div>
  );
}

export default App;
