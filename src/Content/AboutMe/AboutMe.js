import db from '../../data/lang.json'
import './AboutMe.css'

const AboutMe = (props) => {
  return (
    <div id="aboutMe">
      <div id="aboutMeShortcontainer">
        <img src="images/myPic.png" alt="myPic.png" />
        <div className="languageChange" id="aboutMeShort">
          <div id="aboutMeQuote">&bdquo;{db.language.aboutMe.quote[props.language]}&rdquo;</div>
          <div id="aboutMeText">{db.language.aboutMe.aboutMeShort[props.language]}</div>
        </div>
      </div>
      <div id="aboutMeLongContainer">
        <div className="languageChange" id="aboutMeLongText">
          <h2>{db.language.aboutMe.somethingMoreAboutMe[props.language]}</h2>
          <h4>{db.language.aboutMe.somethingMoreAboutMeText[props.language]}</h4>
          <h2>{db.language.aboutMe.whyDoIProgram[props.language]}</h2>
          <h4>
            {db.language.aboutMe.whyDoIProgramText[props.language]}
          </h4>
          <h2>{db.language.aboutMe.myPlansForTheFuture[props.language]}</h2>
          <h4>{db.language.aboutMe.myPlansForTheFutureText[props.language]}</h4>
        </div>
      </div>
      <div id="aboutMeButtonContainer">
        <div id="aboutMeButton" onClick={props.changeAboutMeLong}>
          <div className="languageChange" id="aboutMeButtonText">{db.language.aboutMe.readMore[props.language]}</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe