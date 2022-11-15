import React from 'react'
import './footer.css'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {IoMdMail} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SAGAR SANDBHOR</a>
      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_social">
      <a href="https://www.linkedin.com/in/sagar-sandbhor-896474233" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Sagarsandbhor17" target="_blank"><FaGithub/></a>
        <a href="mailto:sagar12500@gmail.com" target="_blank"><IoMdMail/></a>
        <a target="_blank" href="https://instagram.com/sagar_sandbhor.17"><BsInstagram/></a>
      </div>

      {/* <div className="footer_copyright">
        <small>&copy; Durgashankar. All copy rights reserved</small>
      </div> */}
    </footer>
  )
}

export default Footer