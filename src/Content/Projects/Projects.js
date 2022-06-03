import db from '../../data/lang.json'
import './Projects2.css'


const Projects = () => {
  return (
    <div id="projects">
      <div id="projectsList">
        <a href="https://github.com/xPiccolinox/RiceKing">
          <img src="images/rice_king.png" />
          <img src="images/rice_king.png" />
          <div class="projectDesc">
            {db.language.loremIpsum}
          </div>
        </a>
        <a href="https://github.com/xPiccolinox/RiceKing">
          <img src="images/rice_king_creator.png" />
          <img src="images/rice_king_creator.png" />
          <div class="projectDesc">
            {db.language.loremIpsum}
          </div>
        </a>
        <a href="https://github.com/xPiccolinox/Spotify-Project">
          <img src="images/spotify_project.png" />
          <img src="images/spotify_project.png" />
          <div class="projectDesc">
            {db.language.loremIpsum}
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects

{/* <a href="https://github.com/xPiccolinox/RiceKing">
        <div className="projectTile">
          <img src="images/rice_king.png" alt="RiceKing.png" />
          <div>
            <p>Rice King</p>
            <p>{db.language.loremIpsum}</p>
          </div>
        </div>
      </a>
      <a href="https://github.com/xPiccolinox/RiceKing">
        <div className="projectTile">
          <img src="images/rice_king_creator.png" alt="RiceKingLevelCreator.png" />
          <div>
            <p>Rice King - Level Creator</p>
            <p>{db.language.loremIpsum}</p>
          </div>
        </div>
      </a>
      <a href="https://github.com/xPiccolinox/Spotify-Project">
        <div className="projectTile">
          <img src="images/spotify_project.png" alt="SpotifyProject.png" />
          <div>
            <p>Spotify Clone Project</p>
            <p>{db.language.loremIpsum}</p>
          </div>
        </div>
      </a> */}