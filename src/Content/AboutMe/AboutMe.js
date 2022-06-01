import db from '../../data/lang.json'
import './AboutMe.css'

const AboutMe = (props) => {
  return (
    <div id="aboutMe">
      <div className="aboutMeTile">
        <div className="aboutMeTileHeader">
          {db.language.aboutMe.whoAmI[props.language]}
        </div>
      </div>
      <div className="aboutMeTile">
        <div className="aboutMeTileHeader">
        {db.language.aboutMe.howItStarted[props.language]}
        </div>
      </div>
      <div className="aboutMeTile">
        <div className="aboutMeTileHeader">
        {/* {db.language.aboutMe.whoAmI[props.language]} */}
        </div>
      </div>
      <div className="aboutMeTile">
        <div className="aboutMeTileHeader">
        {/* {db.language.aboutMe.whoAmI[props.language]} */}
        </div>
      </div>
    </div>
  )
}

export default AboutMe