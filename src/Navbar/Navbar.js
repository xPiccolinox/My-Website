import './Navbar.css'
import db from '../data/lang.json'

const Navbar = (props) => {

  const languageImage = db.language.navbar.languageImage[props.language]

  const goTo = (whereTo) => {
    if (whereTo == "greetings") document.getElementById("greetings").scrollIntoView()
    else if (whereTo == "aboutMe") document.getElementById("aboutMe").scrollIntoView()
    else if (whereTo == "myProjects") document.getElementById("myProjects").scrollIntoView()
    else if (whereTo == "roadmap") document.getElementById("roadmap").scrollIntoView()
    else if (whereTo == "contact") document.getElementById("contact").scrollIntoView()
  }

  return (
    <nav>
      <div 
        id="navHomeButton" 
        className="navButton"
        onClick={() => goTo("greetings")}>
          <h4 className="languageChange">{db.language.navbar.greetings[props.language]}</h4>
      </div>
      <div 
        id="navAboutMeButton" 
        className="navButton" 
        onClick={() => goTo("aboutMe")}>
          <h4 className="languageChange">{db.language.navbar.aboutMe[props.language]}</h4>
      </div>
      <div 
        id="navMyProjectsButton" 
        className="navButton" 
        onClick={() => goTo("myProjects")}>
          <h4 className="languageChange">{db.language.navbar.myProjects[props.language]}</h4>
      </div>
      <div 
        id="navContactButton" 
        className="navButton"
        onClick={() => goTo("contact")}>
          <h4 className="languageChange">{db.language.navbar.contact[props.language]}</h4>
      </div>
      <div 
        id="navLanguageButton" 
        className="navButton" 
        onClick={props.changeLanguage}>
          <h4 className="languageChange">{db.language.navbar.language[props.language]}</h4>
          <img className="languageChange" id="navLanguageImage" src={languageImage} alt="LanguageImage" />
      </div>
      <div 
        id="navThemeButton" 
        className="navButton" 
        onClick={props.switchThemePanel}>
          <h4 className="languageChange">{db.language.navbar.theme[props.language]}</h4>
          <div className="languageChange" id="themeAccentColors" />
      </div>
    </nav>
  )
}

export default Navbar