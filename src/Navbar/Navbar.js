import './Navbar.css'

const Navbar = () => {
  const goTo = (id) => {
    console.log(id)
  }

  return (
    <nav>
      <div id="home" className="navButton" onClick={(e) => goTo(e.target.id)}>Home</div>
      <div id="aboutMe" className="navButton" onClick={(e) => goTo(e.target.id)}>About me</div>
      <div id="myProjects" className="navButton" onClick={(e) => goTo(e.target.id)}>My Projects</div>
      <div id="roadmap" className="navButton" onClick={(e) => goTo(e.target.id)}>Roadmap</div>
      <div id="contact" className="navButton" onClick={(e) => goTo(e.target.id)}>Contact</div>
    </nav>
  )
}

export default Navbar