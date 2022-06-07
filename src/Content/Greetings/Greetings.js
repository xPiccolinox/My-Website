import { useEffect } from 'react'
import db from '../../data/lang.json'
import './Greetings.css'

const Greetings = (props) => {

  useEffect(() => {
    const content = document.getElementById('content')
    content.addEventListener('scroll', () => {
      // Blur
      document.getElementById('greetings_7').style.filter = `blur(${(content.scrollTop / 130) + 3}px)`
      document.getElementById('greetings_6').style.filter = `blur(${(content.scrollTop / 190) + 2}px)`
      document.getElementById('greetings_5').style.filter = `blur(${(content.scrollTop / 190) + 2}px)`
      document.getElementById('greetings_4').style.filter = `blur(${(content.scrollTop / 240) + 1.5}px)`
      document.getElementById('greetings_3').style.filter = `blur(${(content.scrollTop / 270) + 1}px)`
      document.getElementById('greetings_2').style.filter = `blur(${(content.scrollTop / 280) + 1}px)`
      document.getElementById('greetings_1').style.filter = `blur(${(content.scrollTop / 300)}px)`
      document.getElementById('greetings_text').style.filter = `blur(${(content.scrollTop / 150)}px)`
      // Parallax effect
      document.getElementById('greetings_7').style.transform = `translateY(${content.scrollTop / 20}%)`
      document.getElementById('greetings_6').style.transform = `translateY(${content.scrollTop / 23}%)`
      document.getElementById('greetings_5').style.transform = `translateY(${content.scrollTop / 26}%)`
      document.getElementById('greetings_4').style.transform = `translateY(${content.scrollTop / 28}%)`
      document.getElementById('greetings_3').style.transform = `translateY(${content.scrollTop / 34}%)`
      document.getElementById('greetings_2').style.transform = `translateY(${content.scrollTop / 38}%)`
      document.getElementById('greetings_1').style.transform = `translateY(${content.scrollTop / 50}%)`
      document.getElementById('greetings_text').style.top = `calc(${(content.scrollTop / 15) + 26}%)`
    })
  })

  return (
    <div id="greetings">
      <img id="greetings_7" src="images/greetings_7.png" alt="greetings_7.png" />
      <img id="greetings_6" src="images/greetings_6.png" alt="greetings_6.png" />
      <img id="greetings_5" src="images/greetings_5.png" alt="greetings_5.png" />
      <img id="greetings_4" src="images/greetings_4.png" alt="greetings_4.png" />
      <div id="greetings_text"><h3 className="languageChange">{db.language.greetings.greetings[props.language]}</h3></div>
      <img id="greetings_3" src="images/greetings_3.png" alt="greetings_3.png" />
      <img id="greetings_2" src="images/greetings_2.png" alt="greetings_2.png" />
      <img id="greetings_1" src="images/greetings_1.png" alt="greetings_1.png" />
      <div id="greetingsOverlay" />
    </div>
  )
}

export default Greetings