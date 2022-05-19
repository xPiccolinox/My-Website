import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'

function App() {
  const [language, setLanguage] = useState(0)
  const languages = ['english', 'polish']
  const [theme, setTheme] = useState(0)
  const themes = ['theme-dark', 'theme-light']

  useEffect (() => {
    document.documentElement.className = themes[0]
  }, [])

  const changeLanguage = () => {
    if (language == languages.length - 1) setLanguage(0)
    else setLanguage(language + 1)
  }
  const changeTheme = () => {
    if (theme == themes.length - 1) {
      setTheme(0)
      document.documentElement.className = themes[0]
    }
    else {
      setTheme(theme + 1)
      document.documentElement.className = themes[theme + 1]
    }
  }

  return (
    <div className="App">
      <Navbar
        language={language}
        changeLanguage={changeLanguage}
        changeTheme={changeTheme}
      />
      <Projects />
    </div>
  );
}

export default App;
