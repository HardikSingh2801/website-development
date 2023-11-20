/* eslint-disable no-unused-vars */
// import "./components/ClockHeading";
import './App.css'
import ClockHeading from "./components/clockheading";

import ClockSlogan from './components/clockslogan';

import CurrentTime from './components/CurrentTime';

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  
  return  <center>

  <ClockHeading></ClockHeading>

  <ClockSlogan></ClockSlogan>
  <CurrentTime></CurrentTime>
  </center>
   
  
}

export default App
