import './Navbar.css'
import db from '../data/lang.json'

const Navbar = (props) => {

  const languageImage = db.language.navbar.languageImage[props.language]

  const goTo = (id) => {
    console.log(id)
  }

  return (
    <nav>
      <div 
        id="home" 
        className="navButton"
        onClick={(e) => goTo(e.target.id)}>
          <h4>{db.language.navbar.greetings[props.language]}</h4>
      </div>
      <div 
        id="aboutMe" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          <h4>{db.language.navbar.aboutMe[props.language]}</h4>
      </div>
      <div 
        id="myProjects" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          <h4>{db.language.navbar.myProjects[props.language]}</h4>
      </div>
      <div 
        id="roadmap" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          <h4>{db.language.navbar.whatNext[props.language]}</h4>
      </div>
      <div 
        id="contact" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          <h4>{db.language.navbar.contact[props.language]}</h4>
      </div>
      <div 
        id="language" 
        className="navButton" 
        onClick={props.changeLanguage}>
          <h4>{db.language.navbar.language[props.language]}</h4>
          <img id="languageImage" src={languageImage} alt="LanguageImage" />
      </div>
      <div 
        id="theme" 
        className="navButton" 
        onClick={props.switchThemePanel}>
          <h4>{db.language.navbar.theme[props.language]}</h4>
          <div id="themeAccentColors" />
      </div>
    </nav>
  )
}

export default Navbar