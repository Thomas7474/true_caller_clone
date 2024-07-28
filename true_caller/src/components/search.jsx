import img3 from "../images/bg.jpeg"
import "./search.css"
function Search(){
    return(
        <div>
           <div className="blue_container">
            <img src={img3} className="blue_container" />


<div className="overlay_content1">
Get the details of the required number
</div>
           <div className="overlay_content2">
            Enter the number :</div>

            <div>
           <input className="overlay_box" type="number" placeholder=" eg: +91 9446207175"/>
           </div>

          
            <button className="search_btn">Search</button>

          <div>
          <input className="overlay_output" type=" text" readOnly placeholder="eg: Thomas Tharakan"/>
          
          </div>
           </div>
        </div>
    );
}

export default Search