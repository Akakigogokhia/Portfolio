import React, { useState } from 'react'
import './Css/Projects.css'

function Project({image}) {

    const [isShown, setIsShown] = useState(false);
    const visitWebsite = () => {
        window.open(website, '_blank')
    }
    const websiteArray = {
        'amazon-clone':'https://clone-d2aeb.web.app/',
        'product-manager': 'https://scandiweb-akaki.000webhostapp.com/',
        'movie-randomizer': 'https://movie-randomizer-6953a.web.app/index.html',
        'portfolio': '',
        'flappy-birds': 'https://flappybird39e28.000webhostapp.com/'
    }
    
    const githubArray = {
        'amazon-clone': 'https://github.com/Akakigogokhia/Amazon-clone',
        'product-manager': 'https://github.com/Akakigogokhia/Product-manager',
        'movie-randomizer': 'https://github.com/Akakigogokhia/Moviewebsite',
        'portfolio': '',
        'flappy-birds': 'https://github.com/Akakigogokhia/Flappy-bird'
    }
    const website = websiteArray[image];

    return (
        <div className='project' 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            
            <img src={image? './'+ image + '.png': 'https://thumbs.gfycat.com/AstonishingGlitteringArizonaalligatorlizard-size_restricted.gif'}/>
        { isShown &&
        <div className='button__container'>
            <button onClick={() => visitWebsite()} className='button__1'><span>visit live website</span></button>
            <button className='button__1' id='button__2'><span>view code</span></button>
        </div>
        }
        </div>
  )
}

export default Project