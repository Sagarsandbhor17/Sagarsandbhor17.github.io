import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/sagar-sandbhor-896474233" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Sagarsandbhor17" target="_blank"><FaGithub/></a>
        <a href="mailto:sagar12500@gmail.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial