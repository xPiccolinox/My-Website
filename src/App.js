import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Navbar/Navbar'
import ThemePanel from './ThemePanel/ThemePanel'
import Projects from './Projects/Projects'

function App() {
  const [language, setLanguage] = useState(0)
  const languages = ['english', 'polish']
  const [theme, setTheme] = useState(0)
  const themes = ['theme-dark', 'theme-light']
  const [accent, setAccent] = useState(0)
  const accents = ['blue', 'purple', 'green', 'yellow']

  useEffect (() => {
    document.documentElement.className = `${themes[theme]}-${accents[accent]}`
  }, [])

  const changeLanguage = () => {
    document.querySelectorAll('*').forEach(element => {
      element.style.color = '#00000000'
      element.style.textShadow = 'none'
    })
    document.getElementById('languageImage').style.filter = 'opacity(0)'
    setTimeout(() => {
      if (language == languages.length - 1) setLanguage(0)
      else setLanguage(language + 1)
      setTimeout(() => {
        document.querySelectorAll('*').forEach(element => {
          element.style.color = 'var(--color-font)'
          element.style.textShadow = '2px 1px 2px var(--color-navbar)'
        })
        document.getElementById('languageImage').style.filter = 'opacity(1)'
      }, 200)
    }, 500)
  }
  const changeTheme = (themeId) => {
    setTheme(themeId.slice(themeId.indexOf('_') + 1))
    document.documentElement.className = `${themes[themeId.slice(themeId.indexOf('_') + 1)]}-${accents[accent]}`
  }
  const changeAccent = (accentId) => {
    setAccent(accentId.slice(accentId.indexOf('_') + 1))
    document.documentElement.className = `${themes[theme]}-${accents[accentId.slice(accentId.indexOf('_') + 1)]}`
  }

  return (
    <div className="App">
      <Navbar
        language={language}
        changeLanguage={changeLanguage}
        changeTheme={changeTheme}
      />
      <ThemePanel theme={theme} accent={accent} changeTheme={changeTheme} changeAccent={changeAccent}/>
      {/* <Projects /> */}
    </div>
  );
}

export default App;
