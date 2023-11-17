import React, {useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';
import {AiFillEye} from "react-icons/ai";
import {AiOutlineEyeInvisible} from "react-icons/ai";

function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [hidePassword, setHidePassword] = useState(true)
    const [hidePasswordConfirmation, setHidePasswordConfirmation] = useState(true)
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();

        fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username: username,
          password: password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then(user => {
          if (user.errors) {
            setErrorsList(user.errors)
            setTimeout(() => {
              setErrorsList([])
          }, 5000);
          } else {
            signup(user)
            navigate("/")
            setFirstName("")
            setLastName("")
            setUsername("")
            setPassword("")
            setPasswordConfirmation("")
          }  
        })
    }

    function togglePassword() {
      hidePassword ? setHidePassword(false) : setHidePassword(true)
    }

    function toggleConfirmPassword() {
      hidePasswordConfirmation ? setHidePasswordConfirmation(false) : setHidePasswordConfirmation(true)
    }
    
    return (
    <div>
      <h4>Sign-up for your free account today:</h4>
      <form onSubmit={handleSubmit} className="login-signup-form"> 
      SIGN-UP 
      <br/>
      <ul className="error-card">{errorsList.map((error, index) => 
        <li key={index}>{error}</li>
      )}</ul>
      <hr />
      <div className='signup-container'>
      </div>
      <label>First Name: </label>
      <div className='signup-container'>
        <input
          type="text"
          id="signup-firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <label>Last Name: </label>
      <div className='signup-container'>
        <input
          type="text"
          id="signup-lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <label>Username: </label>
      <div className='signup-container'>
        <input
          type="text"
          id="signup-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
      <label>Password: </label>
      <div className="password-container">
        <input
          type={ hidePassword ? "password" : "text" }
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <div className="toggle-eye" onClick={togglePassword}>
        { hidePassword ? <AiFillEye/> : <AiOutlineEyeInvisible/>}
        </div>
      </div>
      <label>Confirm Password: </label>
      <div className='password-container'>
        <input
          type={ hidePasswordConfirmation ? "password" : "text" }
          id="signup-password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <div className="toggle-eye" onClick={toggleConfirmPassword}>
        { hidePasswordConfirmation ? <AiFillEye/> : <AiOutlineEyeInvisible/>}
        </div>
      </div>
      </div>
      <br />
      <button type="submit">Submit</button>
      </form>
    </div>
    )
};

export default Signup;