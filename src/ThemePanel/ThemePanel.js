import { useEffect } from 'react'
import './ThemePanel.css'
import db from '../data/lang.json'

const ThemePanel = (props) => {
  const accents = [
    ["#008888", "#700070", "#339933", "#aaaa00"],
    ["#00cccc", "#dd22dd", "#44dd44", "#eeee00"]
  ]

  useEffect(() => {
    document.getElementById('accents').childNodes.forEach((child, index) => {
      child.style.backgroundColor = accents[props.theme][index]
    })
  })

  return(
    <div id="themePanel">
      <div className="themePanelHeader">Themes</div>
      <div id="themes">
        <div id="theme_0" className="themePanelColor" onClick={(e) => {props.changeTheme(e.target.id)}} />
        <div id="theme_1" className="themePanelColor" onClick={(e) => {props.changeTheme(e.target.id)}} />
      </div>
      <div className="themePanelHeader">Accents</div>
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