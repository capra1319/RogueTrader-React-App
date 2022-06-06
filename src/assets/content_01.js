import logo from './logo.svg';
import codecademyLogo from './codecademy-logo.png'


function content_01() {
  return (
      <div 
        className="Main-Content" 
        style={{fontWeight:"500", height:"70vh", paddingTop:"30vh"}}
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        // data-aos-offset="0"
      >
        <p>I've decided to use the learning meterial from codecademy.com, due to their flexability and learn when you can structure through videos and virtual online text editor envirouments.</p>
        <p>They users can start smallre courses that focus on a particular skill or users can start a full job course which bundles all the necessary skills required to start in a specific career path.</p>
        <img 
          src={codecademyLogo} 
          className="logo" 
          alt="logo icon from codecademy.com"
          style={{maxWidth:"50vw", paddingTop:"50px", paddingBottom:"50px"}}
        />
        <p>These two course packages are my primary choices</p>
        <div className="2-col-container">
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
  );
}

export default content_01;