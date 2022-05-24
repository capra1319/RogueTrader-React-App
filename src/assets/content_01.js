import logo from './logo.svg';
import codecademyLogo from './codecademy-logo.png'


function content_01() {
  return (
      <div 
        className="Main-Content_01" 
        style={{fontWeight:"500", height:"80vh", marginTop:"20vh"}}
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        // data-aos-offset="0"
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
    </div >
  );
}

export default content_01;