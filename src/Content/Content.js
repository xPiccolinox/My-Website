import './Content.css'
import Greetings from './Greetings/Greetings'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'

const Content = (props) => {
  return (
    <div id="content">
      <Greetings language={props.language} />
      <AboutMe language={props.language}/>
      <Projects language={props.language} />
    </div>
  )
}

export default Content