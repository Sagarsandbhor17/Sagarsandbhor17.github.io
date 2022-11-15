import React from 'react'
import { IoMdCloudDownload } from "react-icons/io"
import "./header.css"

const CTA = () => {
  return (
    <div className='cta'>
      <a href="https://drive.google.com/u/0/uc?id=1AiJ8g40LWW90ojtZtDCSJgHfN9fedKFT&export=download" download className='btn resume_download'>Resume <IoMdCloudDownload className='resume_icon'/></a>
      <a href="#contact" className='btn btn_primary'>Let's Talk</a>
    </div>
  )
}

export default CTA