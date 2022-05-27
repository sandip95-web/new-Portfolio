import React from 'react'
import  photo from '../../image/pp.jpg'
import {AiOutlineIdcard} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from'react-icons/bs'
import{FiTwitter} from 'react-icons/fi'
import '../CSS/Header.css'
import video from '../../video/video-2.mp4'
const Header = () => {
  return (
    <>
       <div className="h-main" id='home'>
       <video src={video} autoPlay loop muted /><div className="h-left">
              <div className="h-img-btn">
              <div className="h-img">
              <div className="h-bg"></div>
             <img src={photo} alt="" />
              </div>
         <div className="h-button">
           <button className="h-cv">Download CV <AiOutlineIdcard/></button>
           <button><a href="#contact">Let's Talk</a></button>
         </div>
         </div>
         <div className="h-text">
                    <h1>Hello! Beautiful People</h1>
                     <h2>I am Sandip Maharjan</h2>
                     <div className="h-title">
                     <div className="h-title-wrapper">
                        <div className="item">Front-End Developer</div>  
                        <div className="item">Singer</div>  
                        <div className="item">Student</div>  
                        <div className="item">Gamer</div>  
                      </div> 
                     </div>
             </div>
         </div>
         <div className="h-right">
           <div className="r-link">
           <a href="https://github.com/sandip95-web" target='_blank' rel="noreferrer"><FaGithub/></a>
           <a href="https://www.instagram.com/sandipmaharjan95/" target='_blank' rel="noreferrer"><BsInstagram/></a>
           <a href="https://twitter.com/home" target='_blank' rel="noreferrer"><FiTwitter/></a>
           </div>
         </div>
       </div>
    </>
  )
}

export default Header