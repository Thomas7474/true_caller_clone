import React, { useState } from 'react';
import ResponsiveAppBar from './navbar';
import ThreeScene from './threedim';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login(){
  const [contacts, setContacts] = useState({});
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchResult, setSearchResult] = useState('');

//   const handleSearch = () => {
//     if (contacts[name]) {
//       setSearchResult(contacts[name]);
//     } else {
//       setSearchResult('Contact not found');
//     }
//   };

//   const handleAdd = () => {
//     if (name && number) {
//       setContacts({ ...contacts, [name]: number });
//       alert('Contact added successfully');
//       setName('');
//       setNumber('');
//     } else {
//       alert('Both fields are required');
//     }
//   };

//   const handleDelete = () => {
//     if (contacts[name]) {
//       const updatedContacts = { ...contacts };
//       delete updatedContacts[name];
//       setContacts(updatedContacts);
//       setSearchResult('');
//       alert('Contact deleted successfully');
//     } else {
//       alert('Contact not found');
//     }

     const submitHandler = async (e) => {
      e.preventDefault();
      axios.post( 'http://localhost:3000/routes/users/login', {
        email:email,password:password
      })
      .then(response => {
        // Handle the response data
        console.log('Post created:', response.data);
        navigate('/search'); 
      })
      .catch(error => {
        // Handle errors
        console.error('Error creating post:', error);
      });
     }
  return (
    <div className="App">
      <ResponsiveAppBar />
      
      <div className="container">
       <br /><br /> <h1>Enter Details</h1>
        <div className="inputs">
        <div>
        <label for="addname">Email : </label>
          {/*<label>Add-Name : </label>*/}
          <input className='email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password : </label>
          <input className='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        </div>
        <div>
          {/* <button onClick={handleSearch}>Search</button> */}
          <button onClick={submitHandler}>Submit</button>
        {/*<button onClick={handleDelete}>Delete</button>*/}
        </div>
        {/* {searchResult && (
          <div>
            <h2>Search Result</h2>
            <p>{searchResult}</p>
          </div>
        )} */}
      </div>
     {/* <div>
      <header className="App-header">
        <ThreeScene/>
      </header>
    </div> */}
    <ThreeScene/>
    </div>
  );
}
export default Login