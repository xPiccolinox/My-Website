import { useEffect } from 'react'
import './ThemePanel.css'
import db from '../data/lang.json'

const ThemePanel = (props) => {
  const themes = ["#202020", "#ffffff", "#599ebe"]
  const accents = [
    ["#008888", "#880088", "#339933", "#aaaa00"],
    ["#38aedd", "#bb24bb", "#30c230", "#dada26"],
    ["#38aedd", "#bb24bb", "#30c230", "#dada26"]
  ]

  useEffect(() => {
    document.getElementById('accents').childNodes.forEach((child, index) => {
      child.style.backgroundColor = accents[props.theme][index]
    })
    document.getElementById('themes').childNodes.forEach((child, index) => {
      child.style.backgroundColor = themes[index]
    })
  })

  return(
    <div id="themePanel">
      <div className="themePanelHeader"><h4 className="languageChange">{db.language.navbar.themes[props.language]}</h4></div>
      <div id="themes">
        <div id="theme_0" className="themePanelColor" onClick={(e) => {props.changeTheme(e.target.id)}} />
        <div id="theme_1" className="themePanelColor" onClick={(e) => {props.changeTheme(e.target.id)}} />
        <div id="theme_2" className="themePanelColor" onClick={(e) => {props.changeTheme(e.target.id)}} />
      </div>
      <div className="themePanelHeader"><h4 className="languageChange">{db.language.navbar.accents[props.language]}</h4></div>
      <div id="accents">
        <div id="accent_0" className="themePanelColor" onClick={(e) => {props.changeAccent(e.target.id)}} />
        <div id="accent_1" className="themePanelColor" onClick={(e) => {props.changeAccent(e.target.id)}} />
        <div id="accent_2" className="themePanelColor" onClick={(e) => {props.changeAccent(e.target.id)}} />
        <div id="accent_3" className="themePanelColor" onClick={(e) => {props.changeAccent(e.target.id)}} />
      </div>
    </div>
  )
}

export default ThemePanel