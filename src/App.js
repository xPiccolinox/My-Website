import { useState, useEffect } from 'react'
import db from './data/lang.json'
import './App.css';
import Navbar from './Navbar/Navbar'
import ThemePanel from './ThemePanel/ThemePanel'
import Content from './Content/Content'


function App() {
  const [language, setLanguage] = useState(0)
  const languages = ['english', 'polish']
  const [theme, setTheme] = useState(0)
  const themes = ['theme-dark', 'theme-light', 'theme-blue']
  const [accent, setAccent] = useState(0)
  const accents = ['blue', 'purple', 'green', 'yellow']
  const [themePanelOpened, setThemePanelOpened] = useState(false)
  const [aboutMeLong, setAboutMeLong] = useState(false)

  useEffect (() => {
    document.documentElement.className = `${themes[theme]}-${accents[accent]}`
  }, [])
  
  const changeLanguage = () => {
    let elementsToChange = document.querySelectorAll(".languageChange")
    elementsToChange.forEach(element => {
      element.style.filter = "opacity(0)"
    })
    document.getElementById('navLanguageImage').style.filter = 'opacity(0)'
    setTimeout(() => {
      if (language == languages.length - 1) setLanguage(0)
      else setLanguage(language + 1)
      setTimeout(() => {
        elementsToChange.forEach(element => {
          element.style.filter = "opacity(1)"
        })
        document.getElementById('navLanguageImage').style.filter = 'opacity(1)'
      }, 200)
    }, 500)
  }
  const switchThemePanel = () => {
    setThemePanelOpened(!themePanelOpened)
    if (themePanelOpened == false) {
      document.getElementById('themePanel').style.right = '0px'
      document.getElementById('navThemeButton').style.width = 'calc(300px - 48px)'
    }
    else {
      document.getElementById('themePanel').style.right = '-330px'
      document.getElementById('navThemeButton').style.width = '180px'
    }
  }
  const changeTheme = (themeId) => {
    setTheme(themeId.slice(themeId.indexOf('_') + 1))
    document.documentElement.className = `${themes[themeId.slice(themeId.indexOf('_') + 1)]}-${accents[accent]}`
  }
  const changeAccent = (accentId) => {
    setAccent(accentId.slice(accentId.indexOf('_') + 1))
    document.documentElement.className = `${themes[theme]}-${accents[accentId.slice(accentId.indexOf('_') + 1)]}`
  }
  const changeAboutMeLong = () => {
    setAboutMeLong(!aboutMeLong)
    if (aboutMeLong == false) {
      document.getElementById('aboutMeLongContainer').style.maxHeight = `1000px`
      document.getElementById('aboutMeButton').innerText = `${db.language.aboutMe.readLess[language]}`
    }
    else {
      document.getElementById('aboutMeLongContainer').style.maxHeight = '0px'
      document.getElementById('aboutMeButton').innerText = `${db.language.aboutMe.readMore[language]}`
      document.getElementById("aboutMe").scrollIntoView()      
    }
  }

  return (
    <div className="App">
      <Navbar language={language} changeLanguage={changeLanguage} switchThemePanel={switchThemePanel} />
      <ThemePanel language={language} theme={theme} accent={accent} changeTheme={changeTheme} changeAccent={changeAccent} />
      <Content language={language} changeAboutMeLong={changeAboutMeLong}/>
    </div>
  );
}

export default App;
