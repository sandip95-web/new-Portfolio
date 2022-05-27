import React from 'react'
import '../CSS/About.css'
import me from '../../image/me.jpg'
import {RiMedalLine} from 'react-icons/ri'
import {AiOutlineUser,AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
   <>
     <section className="a-main" id='about'>
         <div className="a-text">
         <h5>Get to Know Me</h5>
         <h1>About Me</h1>
         </div>
       <div className="am-container">
         <div className="a_me">
            <div className="a_img">
              <img src={me} alt="" />
            </div>
         </div>
         <div className="a-content">
         <div className="a-card">
           <article>
           <RiMedalLine/> 
            <h2>Experience</h2>
            <small>0</small> 
           </article>
           <article>
           <AiOutlineUser/> 
            <h2>Clients</h2>
            <small>0</small> 
           </article>
           <article>
           <AiOutlineFolderOpen/> 
            <h2>Projects</h2>
            <small>4</small> 
           </article>
         </div>
         <p className='text'>I am a bachelor sutdent currently in my 2nd year.
           I am currently studing web development.If you guys want to
           work together with me then plz fell free to contact.I am always 
           ready to learn from you guys.
         </p>
         <button><a href="#contact">Let's Talk</a></button>
       </div>
       
       </div>
        
     </section>
   </>
  )
}

export default About