import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Education.css'
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: "https://d27028dliefpk3.cloudfront.net/assets/favicon/favicon-32x32.png",
    name: "Masai School",
    year:"Mar 2022-Nov 2022",
    review: "Masai is an outcome driven career school.It is Intensive and Immersive Program. In a duration of 40 weeks, I have 1200+ hours hands on coding , 100+ Hour on SoftSkills."
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUD1nFZH9vgk_IMcI2rgZhtNmG3r8UfZQVAA&usqp=CAU",
    name: "Modern College(Pune)",
    year:"2018-2021",
    review: "BSc Mathematics is a three-year undergraduate degree program focused on developing mathematical skills and knowledge in calculus, data analysis, trigonometry, algebra, etc."
  },
  {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUD1nFZH9vgk_IMcI2rgZhtNmG3r8UfZQVAA&usqp=CAU",
    name: "AISSMS College(Pune)",
    year:"2016-2018",
    review: "Council of Heigher Secondary Education in Science offers an integrated package in Physics,Chemistry,Biology and Mathematics.I have Studied Physics,Chemistry,Math,Biology and other related subjects."
  }

]

const Testimonial = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <section id='education'>
      <h5 data-aos="fade-up">My</h5>
      <h2 data-aos="fade-up">Education</h2>
      <Swiper className="container testimonials_container"
         modules={[ Pagination, A11y]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
      >
        {data.map((el, index) => {
          return (
            <SwiperSlide className='testimonial'>
              <div className="client_avtar">
                <img src={el.avatar} alt="avatar" />
              </div>
              <h5 className='client_name'>{el.name}</h5>
              <h5 className='client_name'>{el.year}</h5>
              <small className='client_review'>
                {el.review}
              </small>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default Testimonial