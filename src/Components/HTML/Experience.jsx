import React from 'react'
import '../CSS/Experience.css'
import image from '../../image/zen.jpg'
const Experience = () => {
  return (
    <>
       <section className="e-main" id='experience'>
          <div className="e-title">
            <h1>Experience</h1>
          </div>
         
          <div className="e-img">
            <h2>Currently NO Experience !</h2>
            <img src={image} alt="" />
          </div>
       </section>
    </>
  )
}

export default Experience