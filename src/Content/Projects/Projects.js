import db from '../../data/lang.json'
import './Projects.css'


const Projects = () => {
  return (
    <div id="projects">
      <div className="projectTile">
        <img src="images/rice_king.png" alt="RiceKing.png" />
        <div>
          <p>Rice King</p>
          <p>{db.language.loremIpsum}</p>
        </div>
      </div>
      <div className="projectTile">
        <img src="images/rice_king_creator.png" alt="RiceKingLevelCreator.png" />
        <div>
          <p>Rice King - Level Creator</p>
          <p>{db.language.loremIpsum}</p>
        </div>
      </div>
      <div className="projectTile">
        <img src="images/spotify_project.png" alt="SpotifyProject.png" />
        <div>
          <p>Spotify Clone Project</p>
          <p>{db.language.loremIpsum}</p>
        </div>
      </div>
    </div>
  )
}

export default Projects