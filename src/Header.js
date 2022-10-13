import React, { useEffect, useRef } from 'react'
import './Css/Header.css'

function Header({shouldScroll, setContactScr, homeClick, setHomeClick}) {

  const home = useRef();
  const scroll = () => {
    if (homeClick) {
      window.scrollTo({
        top: home.current.offsetTop,
        behavior: 'smooth'
      })
      setHomeClick(false);
    }

  }
  useEffect(() => {
    scroll();
  }, [homeClick])
  
  return (
    <div className='header' ref={home}>
        <div className='header__navbar'>
            <h1>Akaki</h1>
            <h4>Akakigoogkhia@gmail.com</h4>
            <div className='header__options'>
                <h4>Resume</h4>
                <h4 onClick={shouldScroll}>Projects</h4>
                <h4 onClick={() => setContactScr(true)}>Contact</h4>
            </div>
        </div>
    </div>
  )
}

export default Header