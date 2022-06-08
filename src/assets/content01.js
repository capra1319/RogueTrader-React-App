import logo from './logo.svg';
import codecademyLogo from './codecademy-logo.png'
import { getValue } from '@testing-library/user-event/dist/utils';

//variable
let logtest = 'test101' ;

//Function HTML section
function Content01() {
  return (
      <div 
        id="startSection01"
        className="Main-Content" 
        style={{fontWeight:"500", height:"100vh"}}
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        // data-aos-offset="0"
      >
        <p>I've decided to use the learning meterial from <a href="https://www.codecademy.com/learn"> codecademy.com</a>, due to their flexability and "learn at your own pace" structure, with their library of tutorial videos and virtual online text editor envirouments.</p>
        <p>Testing my var: <u>{logtest}</u></p>
        <img 
          src={codecademyLogo} 
          className="logo" 
          alt="logo icon from codecademy.com"
          style={{maxWidth:"50vw", paddingTop:"50px", paddingBottom:"50px"}}
        />
        <div 
        className="2-col-container"
        style={{marginTop:"10vh", alignItems:"bottom"}}
        >
{/* Full Stack Engineer course button */}
          <a href="https://www.codecademy.com/learn/paths/full-stack-engineer-career-path" target="_blank" rel="noopener noreferrer">
            <button className="button" style={{Width:"40vw"}}>
              <span>Link to the Full Stack Engineer Course
                <img src={logo} className="App-logo-small" alt="logo" />
              </span>
            </button>
          </a>
        </div>
      </div>
  );
}

export default Content01;