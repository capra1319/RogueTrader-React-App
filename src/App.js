// import logo from './logo.svg';
import './App.css';
import { getByDisplayValue } from '@testing-library/react';
import Content01 from './assets/Content01.js';
import Content02 from './assets/Content02.js';
import { getValue } from '@testing-library/user-event/dist/utils';
import Navbar from './assets/Navbar.js';


function App() {
  return (
    <div className="App" id="homeAnchor">
      <header id="header" className="App-header">
        <Navbar />
        <img src={"https://whatemoji.org/wp-content/uploads/2020/07/Face-With-Open-Mouth-Emoji.png"} className="App-logo" alt="emote" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Working with
            <span 
              style={{fontWeight:"600", color:"#61dafb"}}
              className="reactText"
              > React! </span>
          <br /> and developing a new future for myself with programming
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{fontSize:"16px"}}
        >
          Link to the React site for some starting information!
        </a>
      </header>
      <Content01 />
      <Content02 />
    </div>
  );
}

export default App;