import React from 'react'
import './protfolio.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Protfolio = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='projects'>
      <h5 data-aos="fade-up">My Recent Works</h5>
      <h2 data-aos="fade-up">Projects</h2>

       <div className='allitems container'>
        <div className="item">
          <div className="left" data-aos="flip-left">
            <div className="img">
              <img src="https://assets.affilimate.com/affiliate-programs/skin%20care/skinstore-affiliate-program.jpg" alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-right">
            <h2 className="project_title">
            Cloning Of Skinstore
            </h2>
            <h3 className="project_subtitle">
            Tech stack :  React | Chakra UI | NodeJs | Express | MongoDB | JavaScript | Redux | CSS | JWT |
            </h3>
            <p className='project_desc'>Skinstore is an online retailer that sells premium beauty,clinical skincare,and luxury spa products..</p>
            <div className="buttons">
            <a  href="https://github.com/Sagarsandbhor17/fit-society-8496" className='btn github' target="_blank">Github</a>
            <a   href="https://beautyhubproject.netlify.app/" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left" data-aos="flip-right">
            <div className="img">
              <img src="https://www.getharvest.com/hs-fs/hubfs/screenshot-home-timesheets.png?width=1700&name=screenshot-home-timesheets.png" alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-left">
            <h2 className="project_title">
            Cloning Of getHarvest
            </h2>
            <h3 className="project_subtitle">
            Tech stack :  React | Chakra UI | Redux | JavaScript | Express | NodeJs | MongoDb |
            </h3>
            <p className='project_desc'>Harvest is a web app for time tracking and projects management. Created Full Stack App to handle all the details about the project,employee time tracking...</p>
            <div className="buttons">
            <a  href="https://github.com/Sagarsandbhor17/Harvest" className='btn github' target="_blank">Github</a>
            <a   href="https://harvest-clone-eta.vercel.app/" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left" data-aos="flip-left">
            <div className="img">
              <img src="https://i.pinimg.com/originals/8b/d4/68/8bd4680f9123e5063b7c512c6e8ae2a2.jpg" alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-right">
            <h2 className="project_title">
            Cloning Of Bath&BodyWorks
            </h2>
            <h3 className="project_subtitle">
            Tech stack :  HTML | CSS | JavaScript | LocalStorage
            </h3>
            <p className='project_desc'>Bath & Body Works, LLC. is an American retail store chain that sells soaps, lotions, fragrances, and candles.</p>
            <div className="buttons">
            <a  href="https://github.com/Sagarsandbhor17/Bath-Body-Works-clone" className='btn github' target="_blank">Github</a>
            <a   href="https://starlit-haupia-dada95.netlify.app/" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="left" data-aos="flip-right">
            <div className="img">
              <img src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd337b26121202b5bfb96d7_OriginalSize(1).png" alt="first" />
            </div>
          </div>
          <div className="right" data-aos="flip-left">
            <h2 className="project_title">
            Cloning Of Myhours
            </h2>
            <h3 className="project_subtitle">
            Tech stack :  React | Redux | JavaScript | Express | MongoDb | NodeJs | ChakraUi | TypeScript |
            </h3>
            <p className='project_desc'>My Hours is a cloud based time tracking software designed for small teams and freelancers. Track time on projects with tasks, generate insightful reports and send invoices to clients.</p>
            <div className="buttons">
            <a  href="https://github.com/Sagarsandbhor17/Myhours-clone" className='btn github' target="_blank">Github</a>
            <a   href="https://my-hourss.netlify.app/" className='btn btn_primary web' target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
       </div>
    </section>
  )
}

export default Protfolio