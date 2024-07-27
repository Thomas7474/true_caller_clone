import img2 from "../images/logo.jpg"
import About from "./about";

function Header(){
return(
    <div><div className="navi_bar">
    <nav className="navi">
      <img className="logo" src={img2} alt="logo" />
      <ul className="list">
          <li ><a href="#" id="homecoming">Home</a></li>
          <li><a href="#about">About</a></li>
         
      </ul>

      <button className="login">Login</button>
      <button className="sign_in"> Sign up
        </button>
    </nav>
    
        </div></div>
);
}

export default Header