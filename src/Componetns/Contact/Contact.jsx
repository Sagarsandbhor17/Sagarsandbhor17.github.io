import React, { useEffect } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7luse2a', 'template_fshd08q', form.current, 'TnSZsqsUKpqvpaaH6')
     e.target.reset()
  }
  return (
    <section id='contact'>
      <h5 data-aos="fade-up" data-aos-duration="1000">Get In Touch</h5>
      <h2 data-aos="fade-up" data-aos-duration="4000">Contact Me</h2>
      <div className="container contact-container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='coi' />
            <h4>Email</h4>
            <h5>sagar12500@gmail.com</h5>
            <a href="mailto:sagar12500@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='coi' />
            <h4>Whatsapp</h4>
            <h5>{"+91"} 9527109441</h5>
            <a href="https://api.whatsapp.com/send?phone=+919527109441" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='coi' />
            <h4>LinkedIn</h4>
            <h5>Sagar Sandbhor</h5>
            <a href="https://www.linkedin.com/in/sagar-sandbhor-896474233" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="name" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn_primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact