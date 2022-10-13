import React, { useEffect, useRef, useState } from 'react'
import './Css/Projects.css'
import Project from './Project';


function Projects({ shouldScroll, setScroll, name, setProject, handleClick }) {

  
  const projects = useRef(null);
  const scroll = () => {
    if (shouldScroll) {
      window.scrollTo({
        top: projects.current.offsetTop,
        behavior: 'smooth'
      })
      setScroll(false);
    }

  }
  useEffect(() => {
    scroll();
  }, [shouldScroll])
 
  return (
    <div className='projects' ref={projects}>
      <h1>Projects</h1>
      <div className='projects__container'>
          <div className='projects__names'>
            <div id={name == 'amazon-clone' ? 'clicked__div': null}
            onClick={() => handleClick('amazon-clone')} 
            onMouseEnter={() => setProject('amazon-clone')} >Amazon clone</div>
            
            <div id={name == 'product-manager' ? 'clicked__div': null}
            onClick={() => handleClick('product-manager')} 
            onMouseEnter={() => setProject('product-manager')}>Product manager</div>
            
            <div id={name == 'movie-randomizer' ? 'clicked__div': null}
            onClick={() => handleClick('movie-randomizer')} 
            onMouseEnter={() => setProject('movie-randomizer')}>Movie randomizer</div>
            
            <div id={name == 'portfolio' ? 'clicked__div': null}
            onClick={() => handleClick('portfolio')} 
            onMouseEnter={() => setProject('portfolio')}>Portfolio</div>
            
            <div id={name == 'flappy-birds' ? 'clicked__div': null}
            onClick={() => handleClick('flappy-birds')} 
            onMouseEnter={() => setProject('flappy-birds')}>Flappy birds</div>
            
            <div id={name == 'iyuf' ? 'clicked__div': null}
            onClick={() => handleClick()} 
            onMouseEnter={() => setProject('')}>More...</div>
          </div>
        <div>
          <Project image={name}/>
        </div>
    </div>
    </div>
  )
}

export default Projects