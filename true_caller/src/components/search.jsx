import React, { useState } from 'react';
import axios from 'axios';

import "./search.css";

function Search() {
  const [phonenumber, setNumber] = useState('');
  const [username, setName] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/routes/users/find', {
      phonenumber, username
    })
    .then(response => {
      // Handle the response data
      console.log('Post created:', response.data.username);
      setSearchResult(response.data.username);
    })
    .catch(error => {
      // Handle errors
      console.error('Error creating post:', error);
      setSearchResult('Wrong Number');

    });
  };

  return (
    <div>
      <div className="blue_container">
       
        <div className="overlay_content1">
          Get the details of the required number
        </div>
        <div className="overlay_content2">
          Enter the number :
        </div>
        <div>
          <input 
            className="overlay_box" 
            type="text" 
            placeholder=" eg: +91 9446207175"
            value={phonenumber}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button className="search_btn" onClick={submitHandler}>Search</button>
        <div>
          <input 
            className="overlay_output" 
            type="text" 
            readOnly 
            placeholder="eg: Thomas Tharakan" 
            value={searchResult}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
