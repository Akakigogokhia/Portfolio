import './Css/App.css';
import Header from './Header';
import Home from './Home';
import { useRef, useState } from 'react'

function App() {
  const [scroll, setScroll] = useState(false);
  const [homeClick, setHomeClick] = useState(false);

  const shouldScroll = () => {
    setScroll(true);
  }

  const homeScroll = () => {
    setHomeClick(true);
  }

  const [contactScr, setContactScr] = useState(false);

  return (
    <div className="app">
        <div className='app__container'>
          <Header 
          shouldScroll={shouldScroll} 
          setContactScr={setContactScr}
          homeClick={homeClick}
          setHomeClick={setHomeClick}
          />
          <Home 
          scroll={shouldScroll} 
          shouldScroll={scroll} 
          setScroll={setScroll} 
          contactScr={contactScr} 
          setContactScr={setContactScr}
          homeScroll={homeScroll}
          />
         
        </div>
    </div>
  );
}

export default App;
