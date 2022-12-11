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
                <img src="data:image/png;base64,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" alt="avatar" />
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