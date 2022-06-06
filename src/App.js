// import logo from './logo.svg';
import './App.css';
import { getByDisplayValue } from '@testing-library/react';
import Content_01 from './assets/content_01.js'

function App() {
  return (
    <div className="App">
      <header id="47455" className="App-header">
        <img src={"https://whatemoji.org/wp-content/uploads/2020/07/Face-With-Open-Mouth-Emoji.png"} className="App-logo" alt="emote" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          I decided to learn
            <span 
              style={{fontWeight:"600", color:"#61dafb"}}
              className="reactText"
              > React! </span>
          <br />... and perhaps become a Developer.
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
      <Content_01 />
    </div>
  );
}

export default App;