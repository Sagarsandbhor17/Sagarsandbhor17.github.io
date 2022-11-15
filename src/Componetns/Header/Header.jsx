import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import { IoMdMail } from 'react-icons/io'
import { IoMdCloudDownload } from 'react-icons/io'
import Typewriter from "typewriter-effect"
import Particles, { ISourceOptions } from "react-particles";
import myimg from "../../Assests/sagar.jpg"
const Header = () => {
  return (
    <header>
      {/* <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>DURGASHANKAR PAL</h1>
      <ul className="dynamic_text">
      <li><span>Web Designer</span></li>
      <li><span>FullStack Developer</span></li>
      <li><span>FullTime Coder</span></li>
      </ul>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME} alt="MY LOGO" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div> */}
      <div id="aboutme">
        <div>
          <h2>Hi, my name is</h2>
          <h1 id="name">Sagar Sandbhor</h1>
          <div className='header_type'>I'm a <div id='title'><Typewriter
            cursorColor="black"
            options={{
              strings: [
                "Full Stack Developer",
                "Problem Solver",
                "Front-End Developer",
                "Software Engineer"
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1000
            }}
          /></div></div>
          <a href="https://drive.google.com/u/0/uc?id=1AiJ8g40LWW90ojtZtDCSJgHfN9fedKFT&export=download" className='btn btn_primary web' download>Resume <IoMdCloudDownload className='resume_icon' /></a>
          <div className='header_socials'>
            <a href="https://www.linkedin.com/in/sagar-sandbhor-896474233" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Sagarsandbhor17" target="_blank"><FaGithub /></a>
            <a href="mailto:sagar12500@gmail.com" target="_blank"><IoMdMail /></a>
            <a target="_blank" href="https://instagram.com/sagar_sandbhor.17"><BsInstagram/></a>

          </div>
        </div>
        <div>
          <div>
            <div id="picborder">
              <div id="pic">
                <img style={{borderRadius:'20%'}} src={myimg} alt="sagar-sandbhor" />
              </div>
            </div>
            <div className='header_socials2'>
              <a href="https://www.linkedin.com/in/sagar-sandbhor-896474233" target="_blank"><BsLinkedin /></a>
              <a href="https://github.com/Sagarsandbhor17" target="_blank"><FaGithub /></a>
              <a href="mailto:sagar12500@gmail.com" target="_blank"><IoMdMail /></a>
              <a target="_blank" href="https://instagram.com/sagar_sandbhor.17"><BsInstagram/></a>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header