import logo from './logo.svg';
import { getValue } from '@testing-library/user-event/dist/utils';

let number = 0;
    number = 5+5;

let myName = 'Who?';
if (number = 10) {
    myName = 'Anthony Buciu';
} else {
    myName = 'That Number is a lie';
};

//Function HTML section
function Content02() {
  return (
      <div 
        id="startSection02"
        className="Main-Content" 
        style={{fontWeight:"500", height:"100vh"}}
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        // data-aos-offset="0"
      >
        <img src={logo} className="App-logo-small" alt="logo" />
        <div>
        <span>My name is {myName}</span>
        </div>
      </div>
  );
}

export default Content02;