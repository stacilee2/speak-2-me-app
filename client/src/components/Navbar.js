import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';

function Navbar() {

  const {user, handleLogout, loggedIn} = useContext(UserContext)

    if (!loggedIn) {
      return(
        <div>
        <div className="nav-bar">
            <Link 
              to="/" 
              className="nav-link"
              activestyle={{ fontWeight: "bold", color: "pink"
              }}>
            Home
            </Link>
            <Link 
              to="/login" 
              className="nav-link"
              activestyle={{ fontWeight: "bold", color: "pink"
              }}>
            Login/Signup
            </Link>
        </div>
        </div>
      )
    } else {
      return (
        <div>
           <div className="nav-bar">
           <p className="greeting">Welcome, {user.first_name} <span>&#128075;</span> <br/>
           <button onClick={handleLogout}>Logout</button></p>
              <Link 
                  to="/" 
                  className="nav-link"
                  activestyle={{ fontWeight: "bold", color: "pink"
                  }}>
                Home
                </Link>
                <Link 
                to="/conversation" 
                className="nav-link"
                activestyle={{ fontWeight: "bold", color: "pink"
                }}>
                Therapy Chat
                </Link>
                <Link 
                to="/speechtasks" 
                className="nav-link"
                activestyle={{ fontWeight: "bold", color: "pink"
                }}>
                Speech Tasks
                </Link>
                <Link 
                to="/myspeechtasks" 
                className="nav-link"
                activestyle={{ fontWeight: "bold", color: "pink"
                }}>
                To-Do
                </Link>
            </div>
        </div>
      )
    }
};

export default Navbar;