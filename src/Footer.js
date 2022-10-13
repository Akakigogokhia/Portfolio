import React from 'react'
import './Css/Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer({shouldScroll, setContactScr, homeScroll}) {
  return (
    <div className='footer'>
        <hr />
        <div className='footer__container'>
        <div className='footer__options'>
          <h4 onClick={() => homeScroll()}>Akaki</h4>
          <h4>Resume</h4>
          <h4 onClick={shouldScroll}>Projects</h4>
          <h4 onClick={() => setContactScr(true)}>Contact</h4>
        </div>
        <div className='footer__socials'>
          <a href='https://github.com/Akakigogokhia' target='_blank'>
            <GitHubIcon style={{width: '40px', height: '43px', marginRight: '15px'}}/>
          </a>
          <a href='https://www.linkedin.com/in/akaki-g-105254239/' target='_blank'>
            <LinkedInIcon style={{width: '46px', height: '46px'}}/>
          </a>
        </div>
        <h5>Copyright © 2022 Akaki Gogokhia All Rights Reserved.</h5>
      </div>
        
    </div>
  )
}

export default Footer