import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import { useState } from 'react'

const Nav = () => {
  const [activenav, setActivenav] = useState("#")
  const [activemenu,setActivemenu] = useState(false)
  const handleClick = () => {
    setActivemenu(!activemenu)
  }
  const handleHide = (e) =>{
    setActivenav(e)
    setActivemenu(false)
  }
  return (
    <div className='topnav'>
    <nav>
      <a href="#" className='dp'>SS</a>
      <div>
        <ul id='navbar' className={activemenu ? "#navbar active" : "#navbar"}>
          <li><a href="#" onClick={()=>handleHide("#")} className={activenav==="#" ? "active" : ""}>Home</a></li>
          <li><a href="#about" onClick={()=>handleHide("#about")} className={activenav==="#about" ? "active" : ""}>About</a></li>
          <li><a href="#projects"  onClick={()=>handleHide("#projects")} className={activenav==="#projects" ? "active" : ""}>Projects</a></li>
          <li><a href="#skill" onClick={()=>handleHide("#skill")} className={activenav==="#skill" ? "active" : ""}>Skills</a></li>
          <li><a href="#contact" onClick={()=>handleHide("#contact")} className={activenav==="#contact" ? "active" : ""}>Contact</a></li>
          <li><a href="https://drive.google.com/u/0/uc?id=1AiJ8g40LWW90ojtZtDCSJgHfN9fedKFT&export=download" download> <button className='resume_btn' onClick={()=>{
            window.open("https://drive.google.com/file/d/1AiJ8g40LWW90ojtZtDCSJgHfN9fedKFT/view?usp=share_link")
          }}> Resume </button></a></li>
        </ul>
      </div>
        <div id='mobile'>
          {
            activemenu ? <BsChevronDoubleRight onClick={handleClick} className="nav_icon "/>  : <AiOutlineMenuFold  className="nav_icon" onClick={handleClick} />
          }

        </div>
    </nav>
    </div>
  )
}

export default Nav