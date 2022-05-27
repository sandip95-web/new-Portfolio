import React, { useState } from 'react'
import {BiHomeCircle} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {FaToolbox} from 'react-icons/fa'
import {AiOutlineProject} from 'react-icons/ai'
import {MdContactPhone} from 'react-icons/md'
import '../CSS/Navbar.css'
const Navbar = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <>
          <nav className="main-nav">
             <a href="#home" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' :''}><BiHomeCircle/></a>
             <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' :''}><CgProfile/></a>
             <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' :''}><HiOutlineLightBulb/></a>
             <a href="#material" onClick={()=>setActiveNav('#material')} className={activeNav==='#material' ? 'active' :''}><FaToolbox/></a>
             <a href="#project" onClick={()=>setActiveNav('#project')} className={activeNav==='#project' ? 'active' :''} ><AiOutlineProject/></a>
             <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' :''}><MdContactPhone/></a>
          </nav>
    </>
  )
}

export default Navbar