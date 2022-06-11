import db from '../../data/lang.json'
import './AboutMe.css'

const AboutMe = (props) => {
  return (
    <div id="aboutMe">
      <div id="aboutMeShortcontainer">
        <div id="aboutMeShort">
          <img src="images/myPic.png" alt="myPic.png" />
          <div className="languageChange" id="aboutMeShortContainer">
            <div id="aboutMeQuote">&bdquo;{db.language.aboutMe.quote[props.language]}&rdquo;</div>
            <div id="aboutMeText">{db.language.aboutMe.aboutMeShort[props.language]}</div>
          </div>
        </div>
      </div>
      <div id="aboutMeLongContainer">
        {db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}{db.language.loremIpsum}
      </div>
      <div id="aboutMeButtonContainer">
        <div id="aboutMeButton" onClick={props.changeAboutMeLong}>
          Read More
        </div>
      </div>
    </div>
  )
}

export default AboutMe