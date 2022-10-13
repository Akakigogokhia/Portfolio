import React from 'react'
import './Css/Skills.css'

function Skills({languages}) {
  return (
    <div className='skills'>
        <h1>Skills</h1>
        <div className='skills__contaner'>
            <div className='skills__list'>
              <div className={languages.javascript? 'skills__border': null}>
                <p>JavaScript</p>
                <img src='./js.png'/> 
              </div>
              <div className={languages.html? 'skills__border': null}>
                <p>HTML</p>
                <img src='./html.png'/>
              </div>
              <div className={languages.css? 'skills__border': null}>
                <p>CSS</p>
                <img src='./css.png'/>
              </div>
              <div className={languages.react? 'skills__border': null}>
                <p>React</p>
                <img src='./react.png'/>
              </div> 
              <div className={languages.php? 'skills__border': null}>
                <p>PHP</p>
                <img src='./php.png'/>
              </div>
              <div className={languages.python? 'skills__border': null}>
                <p>Python</p>
                <img src='./python.png'/>
              </div>
              <div className={languages.mysql? 'skills__border': null}>
                <p>MySQL</p>
                <img src='./mysql.png' />
              </div>
              <div className={languages.bootstrap? 'skills__border': null}>
                <p>Bootstrap</p>
                <img src='./bootstrap.png' />
              </div>
              <div className={languages.jquery? 'skills__border': null}>
                <p>Jquery</p>
                <img src='./jquery.png' />
              </div>
              <div className={languages.c? 'skills__border': null}>
                <p>C++</p>
                <img src='./c++.png' />
              </div>

            
            </div>
        <div className='gif__container'>
            {/*<img className='skills__gif' src='https://media2.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif' />*/}
        </div>
        </div>
    </div>
  )
}

export default Skills