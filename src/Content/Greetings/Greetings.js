import db from '../../data/lang.json'
import './Greetings.css'

const Greetings = () => {
  return (
    <div id="greetings">
      <h4>In Progress</h4>
      <img id="greetingsGif" src="placeholder.gif" alt="Greetings gif" />
      <div id="greetingsOverlay" />
    </div>
  )
}

export default Greetings