import db from '../../data/lang.json'
import './Projects2.css'


const Projects = (props) => {
  return (
    <div id="projects">
      <div id="projectsList">
        <div className="projectTile">
          <img src="images/riceKing_image.png" alt="riceKing_image.png" />
          <div class="projectDesc">
            <div className="projectText">
              {db.language.myProjects.riceKing[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/RiceKing">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectTile">
          <img src="images/riceKingLevelCreator_image.png" alt="riceKingLevelCreator_image.png" />
          <div class="projectDesc">
            <div className="projectText">
              {db.language.myProjects.riceKingLevelCreator[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/RiceKing">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectTile">
          <img src="images/spotifyCloneAppIP_image.png" alt="spotifyCloneApp_image.png" />
          <div class="projectDesc">
            <div className="projectText">
              {db.language.myProjects.spotifyCloneApp[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/Spotify-Project">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectTile">
          <img src="images/myWebsite_image.png" alt="myWebsite_image.png" />
          <div class="projectDesc">
            <div className="projectText">
              {db.language.myProjects.myWebsite[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/My-Website">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects