import React, { useState } from 'react'
import '../CSS/Contact.css'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
   const[done,setDone]=useState(false)
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_q3eshe9', 'template_77fwi7y', form.current, 'zV39CugUBeY7wWvp-')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
     <section className="c-main" id='contact'>
       <h2 className='c-text c-t1'>Get In Touch</h2>
       <h1 className='c-text'>Contact Me</h1>
       <div className="c-sub">
       <div className="c-left">
         <article className='info-box'>
           <h5>Email</h5>
           <AiOutlineMail/>
           <h6>sandipmaharjan95@gmail.com</h6>
            <button><a href="mailto:sandipmaharjan95@gmail.com">Send Email</a></button>
         </article>
         <article className='info-box'>
           <h5>Messenger</h5>
           <RiMessengerLine/>
            <button><a href="http://m.me/sandeep.maharjan.58" target='_blank' rel='noreferrer'>Send Messages</a></button>
         </article>
       </div>
       <div className="c-right">
         <form ref={form} onSubmit={sendEmail}>
           <input type="text" name='name'placeholder='Enter Your Name' required />
           <input type="email" name='email'placeholder='Enter Your email' required />
           <textarea name="message"  rows="7"></textarea>
           <button type='submit'>Send Message</button>
           {done && <div>Thank You!</div>}
         </form>
       </div>
       </div>
     </section>
    </>
  )
}

export default Contact