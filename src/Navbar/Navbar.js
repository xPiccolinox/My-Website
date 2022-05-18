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
          {db.language.navbar.greetings[props.language]}
      </div>
      <div 
        id="aboutMe" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          {db.language.navbar.aboutMe[props.language]}
      </div>
      <div 
        id="myProjects" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          {db.language.navbar.myProjects[props.language]}
      </div>
      <div 
        id="roadmap" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          {db.language.navbar.whatNext[props.language]}
      </div>
      <div 
        id="contact" 
        className="navButton" 
        onClick={(e) => goTo(e.target.id)}>
          {db.language.navbar.contact[props.language]}
      </div>
      <div 
        id="language" 
        className="navButton" 
        onClick={props.changeLanguage}>
          Language:
          <img id="languageImage" src={languageImage} alt="LanguageImage" />
      </div>
    </nav>
  )
}

export default Navbar