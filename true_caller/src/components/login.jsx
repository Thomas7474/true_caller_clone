import React, { useState } from 'react';
import ResponsiveAppBar from './navbar';
import './login.css'
function Login(){
    const [contacts, setContacts] = useState({
    "John Doe": "1234567890",
    "Jane Smith": "0987654321",
    "Alice Johnson": "1111222233",
  });

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
//   };

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
          <button>Submit</button>
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
    </div>
  );
}
export default Login