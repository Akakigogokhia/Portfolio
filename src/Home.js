import React, { useEffect, useRef, useState } from 'react'
import Contact from './Contact'
import './Css/Home.css'
import Footer from './Footer'
import Projects from './Projects'
import Skills from './Skills'

function Home({shouldScroll ,setScroll, contactScr, setContactScr ,scroll, homeScroll}) {
  
  const [languages, setLanguages] = useState({
      html:false,
      css: false,
      javascript: false,
      react: false,
      php: false,
      python: false,
      mysql: false,
      bootstrap: false,
      jquery: false,
      c: false,
  });

  const [click, setClick] = useState(false)
  const [name, setName] = useState('');
  const handleClick = (name) => {
    setClick(!click);
    setProject(name);
    
  }

  const setProject = (projectName) => {
      
      if (click){
          
      }else {
        setName(projectName);
      if(projectName=='amazon-clone'  || projectName=='portfolio') {
        setLanguages({
          html: true,
          css: true,
          javascript: true,
          react: true,
          php: false,
          python: false,
          mysql: false,
          bootstrap: false,
          jquery: false,
          c: false,
        })
        
      }else if(projectName=='product-manager'){
        setLanguages({
          html: true,
          css: true,
          javascript: true,
          react: false,
          php: true,
          python: false,
          mysql: true,
          bootstrap: false,
          jquery: true,
          c: false,
        })
      }else if(projectName=='movie-randomizer' || projectName=='flappy-bird'){
        setLanguages({
          html: true,
          css: true,
          javascript: true,
          react: false,
          php: false,
          python: false,
          mysql: false,
          bootstrap: false,
          jquery: false,
          c: false,
        })
      }}
  }
  return (
    
    <div className='home' >
        <div className='home__div'>
          <div className='home__container'>
            <p></p>
            <h2>Hello,I'm Akaki Gogokhia</h2>
            <h3>Web developer</h3>
          </div>
          <div className='image'>
            <img src='./man.png' />
          </div>
        </div>
        <Skills languages={languages}/>
        <Projects 
        shouldScroll={shouldScroll} 
        setScroll={setScroll} 
        name={name} 
        setProject={setProject}
        click={click}
        handleClick={handleClick}
        />
        <Contact contactScr={contactScr} setContactScr={setContactScr}/>
        <Footer shouldScroll={scroll} setContactScr={setContactScr} homeScroll={homeScroll}/>
    </div>
  )
}

export default Home