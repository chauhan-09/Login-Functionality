import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email , password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div>
    <div className="A1">
      <h2>Register</h2>
      <div className="form-group fullname">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="form-group email">
        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="form-group password">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        <i id="pass-toggle-btn" className="fa-solid fa-eye"></i>
      </div>
      <div className="form-group submit-btn">
        <input type="submit" value="Submit"/>
      </div>
    </div>
  </div>
</form>
<p><b>Already have an Account</b></p>
<Link to="/login" className="login-button">Login</Link>
    </div>
  );
}

export default SignUp