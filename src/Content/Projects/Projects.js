import db from '../../data/lang.json'
import './Projects.css'


const Projects = (props) => {
  return (
    <div id="myProjects">
      <div id="projectsList">
        <div className="projectTile">
          <img src="images/riceKing_image.png" alt="riceKing_image.png" />
          <div className="projectDesc">
            <div className="projectText languageChange">
              {db.language.myProjects.riceKing[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/RiceKing" target="_blank">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectTile">
          <img src="images/riceKingLevelCreator_image.png" alt="riceKingLevelCreator_image.png" />
          <div className="projectDesc">
            <div className="projectText languageChange">
              {db.language.myProjects.riceKingLevelCreator[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/RiceKingLevelCreator" target="_blank">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectTile">
          <img src="images/spotifyCloneApp_inProgress_image.png" alt="spotifyCloneApp_image.png" />
          <div className="projectDesc">
            <div className="projectText languageChange">
              {db.language.myProjects.spotifyCloneApp[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/Spotify-Project" target="_blank">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectTile">
          <img src="images/myWebsite_inProgress_image.png" alt="myWebsite_image.png" />
          <div className="projectDesc">
            <div className="projectText languageChange">
              {db.language.myProjects.myWebsite[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/My-Website" target="_blank">
                <img src="/icons/github.png" alt="github.png"/>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="projectTile">
          <img src="images/cubesCss_image.png" alt="cubesCss_image.png" />
          <div className="projectDesc">
            <div className="projectText languageChange">
              {db.language.myProjects.cubesCss[props.language]}
            </div>
            <div className="projectButtonArea">
              <a href="https://github.com/xPiccolinox/cubes-css" target="_blank">
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