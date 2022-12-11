import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Experience = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='experience'>
      <h5 >The Languages I Learnt</h5>
      <h2 >Languages and Tools</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3 >Frontend Development</h3>
          <div className="experience_content">
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img" >
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/html-5.png" alt="avatar" />
              </div>
              <h4>HTML</h4>
              {/* <small className='text_light'>Experienced</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img" >
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/css-3.png" alt="avatar" />
              </div>
              <h4>CSS</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img" >
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/js.png" alt="avatar" />
              </div>
              <h4>JavaScript</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://gayathry-portfolio.vercel.app/redux.png" alt="avatar" />
              </div>
              <h4>Redux</h4>
              {/* <small className='text_light'>Experienced</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/react.png" alt="avatar" />
              </div>
              <h4>React</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://gayathry-portfolio.vercel.app/css.png" alt="avatar" />
              </div>
              <h4>TypeScript</h4>
              {/* <small className='text_light'>Intermeiate</small> */}
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img" >
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/nodejs.png" alt="avatar" />
              </div>
              <h4>Node JS</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://gayathry-portfolio.vercel.app/express.png" alt="avatar" />
              </div>
              <h4>Express</h4>
        
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://arjun-porfolio.vercel.app/assets/images/flaticon/mongodb.png" alt="avatar" />
              </div>
              <h4>MongoDB</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="avatar" />
              </div>
              <h4>Github</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://jwt.io/img/pic_logo.svg" alt="avatar" />
              </div>
              <h4>JWT</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>

            <article  className='experince_details'>
              {/* <BsPatchCheckFill className='experience_details_icon' /> */}
              <div>
              <div className="client_avtar icon_img">
                <img src="https://authy.com/wp-content/uploads/npm-logo.png" alt="avatar" />
              </div>
              <h4>NPM</h4>
              {/* <small className='text_light'>Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience