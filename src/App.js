import logo from './logo.svg';
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
      <div className="Main-Content" style={{fontWeight:"500"}}>
        <p>
          Or choose one of the Following other options below, because Codecademy has some pretty crazy course packages!
        </p>
        <a
          href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button 
            className="button"
          >
            <span>
                The Magic of codecademy!
              <img src={logo} className="App-logo-small" alt="logo" />
            </span>
          </button>
        </a>
      </div>
    </div >
  );
}

export default App;