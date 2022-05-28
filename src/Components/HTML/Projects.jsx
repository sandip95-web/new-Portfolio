import React from 'react'
import '../CSS/Project.css'
import {VscCircleLargeOutline} from 'react-icons/vsc'
const Projects = () => {
  return (
    <>
      <section className="p-main" id='project'>
        <h1>Project</h1>
        <div className="p-submain">
          <div className="shape"></div>
          <div className="shape2"></div>
        <div className="p-card">
         <div className="p-dot">
                        <VscCircleLargeOutline className='circle' style={{color:'red'}}  />
                        <VscCircleLargeOutline className='circle' style={{color:'red'}} />
                        <VscCircleLargeOutline className='circle' style={{color:'red'}} />  
                    </div>
                    <div className="p-data">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                    <button><a href="https://github.com/sandip95-web?tab=repositories" target='_blank' rel='noreferrer'>Visit</a></button>
                    </div>
         </div>
        </div>
      </section>
    
    </>
  )
}

export default Projects