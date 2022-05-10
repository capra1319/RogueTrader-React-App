import logo from './logo.svg';
import codecademyLogo from './assets/codecademy-logo.png'
import './App.css';
import { getByDisplayValue } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header id="47455" className="App-header">
        <img src={"https://whatemoji.org/wp-content/uploads/2020/07/Face-With-Open-Mouth-Emoji.png"} className="App-logo" alt="emote" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          So I want to Learn React and maybe become a developer.
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
      <div 
        className="Main-Content" 
        style={{fontWeight:"500"}}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <p>
          Or choose one of the Following other options below, because Codecademy has some pretty crazy course packages!
        </p>
        <img 
          src={codecademyLogo} 
          className="logo" 
          alt="logo"
          style={{maxheight:"300px", paddingTop:"50px", paddingBottom:"50px"}}
        />
        <div>
          <a
            href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button 
              className="button"
              style={{Width:"40vw"}}
              >
              <span>
                Front End Developer Course
                <img src={logo} className="App-logo-small" alt="logo" />
              </span>
            </button>
          </a>
          <a
            href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
            target="_blank"
            rel="noopener noreferrer"
            >
            <button 
              className="button"
              style={{Width:"40vw"}}
              >
              <span>
                Full Stack Engineer Course
                <img src={logo} className="App-logo-small" alt="logo" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div >
  );
}

export default App;