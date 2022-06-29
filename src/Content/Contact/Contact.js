import './Contact.css'

const Contact = (props) => {
  return (
    <div id="contact">
      <a href="mailto:sobor.jakub@gmail.com">
        <img src="/icons/email.png" alt="email.png" />
        <h2>sobor.jakub@gmail.com</h2>
      </a>
      <a href="https://discordapp.com/users/316229523576455168" target="_blank" rel="noreferrer">
        <img src="/icons/discord.png" alt="discord.png" />
        <h2>CKRJ#6592</h2>
      </a>
      <a href="https://github.com/xpiccolinox" target="_blank" rel="noreferrer">
        <img src="/icons/github.png" alt="github.png" />
        <h2>github.com/xpiccolinox</h2>
      </a>
      <div>
        <img src="/icons/phone.png" alt="phone.png"/>
        <h2>+48 886 665 781</h2>
      </div>
    </div>
  )
}

export default Contact