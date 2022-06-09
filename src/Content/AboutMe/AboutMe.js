import db from '../../data/lang.json'
import './AboutMe.css'

const AboutMe = (props) => {
  return (
    <div id="aboutMe">
      <div id="container">
        <div id="aboutMeShort">
          <img src="images/myPic.png" alt="myPic.png" />
          <div className="languageChange" id="aboutMeShortContainer">
            <div id="aboutMeQuote">&bdquo;{db.language.aboutMe.quote[props.language]}&rdquo;</div>
            <div id="aboutMeText">{db.language.aboutMe.aboutMeShort[props.language]}</div>
          </div>
        </div>
        {/* <div id="aboutMeButton">Read More</div> */}
      </div>
    </div>
  )
}

export default AboutMe