import React from 'react'
import '../CSS/Footer.css'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from'react-icons/bs'
import{FiTwitter} from 'react-icons/fi'
import {BiCopyright} from 'react-icons/bi'
const Footer = () => {
  return (
    <div className="f-main">
      <div className="link">
         <a href="#about">About</a>
         <a href="#experience">Experience</a>
         <a href="#material">Material</a>
         <a href="#project">Project</a>
         <a href="#contact">Contact</a>
      </div>
      <div className="f-sub">
      <div className="media">
      <a href="https://github.com/sandip95-web" target='_blank' rel="noreferrer"><FaGithub/></a>
           <a href="https://www.instagram.com/sandipmaharjan95/" target='_blank' rel="noreferrer"><BsInstagram/></a>
           <a href="https://twitter.com/home" target='_blank' rel="noreferrer"><FiTwitter/></a>
      </div>
      <div className="copyr">
        <h4>All Right Reserverd 2022<BiCopyright/></h4>
      </div>
      </div>
    </div>
  )
}

export default Footer