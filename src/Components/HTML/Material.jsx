import React from 'react'
import '../CSS/Material.css'
import data from '../../Components/HTML/List'
import {VscCircleLargeOutline} from 'react-icons/vsc'
const Material = () => {
  return (
    <>
       <section className="m-main" id='material'>
         <h1 className='m-title'>Materials</h1>
         <div className="mc-main">
          {
            data.map((item)=>(
                 <div className="m-card">
                    <div className="m-dot">
                        <VscCircleLargeOutline className='circle'  />
                        <VscCircleLargeOutline className='circle' />
                        <VscCircleLargeOutline className='circle' />  
                    </div>
                             <img src={item.img} alt="" />
                             <h1>{item.name}</h1>
                              <button><a href={item.link} target='_blank' rel="noreferrer">Click to learn</a></button>
                          
                 </div>
            ))
          }
         </div>
       </section>
    </>
  )
}

export default Material