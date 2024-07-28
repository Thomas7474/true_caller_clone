import { Link } from "react-router-dom";
import img2 from "../images/logo.jpg"
import About from "./about";

function Header(){
return(
    <div><div className="navi_bar">
    <nav className="navi">
      <img className="logo" src={img2} alt="logo" />
      <ul className="list">
          <li ><a href="#" id="homecoming" className="blackText">Home</a></li>
          <li><a href="#about" className="blackText">About</a></li>
         
      </ul>

      <button className="login "><Link to="/login" className="coloured">Login</Link></button>
      <button className="sign_in "> <Link to="/signup" className="coloured">Sign Up</Link>
        </button>
    </nav>
    
        </div></div>
);
}

export default Header