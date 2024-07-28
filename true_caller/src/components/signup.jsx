import React, { useState } from 'react';
import ResponsiveAppBar from './navbar';
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup(){

  const navigate = useNavigate();
  const [username, setName] = useState('');
  const [phonenumber, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    axios.post( 'http://localhost:3000/routes/users/signup', {
      email,password,phonenumber,username,
    })
    .then(response => {
      // Handle the response data
      console.log('Post created:', response.data);
      navigate('/login'); 
    })
    .catch(error => {
      // Handle errors
      console.error('Error creating post:', error);
    });
   }
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div className="container_signup">

      <br /><br />  <h1>Enter Details</h1>

        <div className="input">
        <div>
        <label htmlFor="addname"  className='username_font'>Username : </label>
          {/*<label>Add-Name : </label>*/}
          <input className='names'
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='password2_font'>Password : </label>
          <input className='passwords'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label className='email2_font'>Email : </label>
          <input className='emails'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='ph_font'>Phone Number : </label>
          <input className='numbers'
            type="text"
            value={phonenumber}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        </div>
        <div>
          {/* <button onClick={handleSearch}>Search</button> */}
          <button className='button' onClick={submitHandler}>Submit</button>
        {/*<button onClick={handleDelete}>Delete</button>*/}
        </div>
        {/* {searchResult && (
          <div>
            <h2>Search Result</h2>
            <p>{searchResult}</p>
          </div>
        )} */}
      </div>
      {/*<div>
      <header className="App-header">
        <ThreeScene/>
      </header>
    </div>*/}
    </div>
  );
}
export default Signup