import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        user: "",
        speechTasks: []
    });


    const [loggedIn, setLoggedIn] = useState(false)

        useEffect(() => {
            fetch('/me')
            .then((r) => {
                if (r.ok) {
                r.json().then((user) => onLogin(user))
                }
            });
        }, []);
    

    function onLogin(user) {
        setUser(user);
        setLoggedIn(true)
    }

    function signup(user) {
        setUser(user)
        setLoggedIn(true)
    }

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
          }).then(() => onLogout())
    };
    
    function onLogout() {
        setUser({
            user: "",
            speechTasks: []
        })
        setLoggedIn(false)
        navigate("/")
    }

  return <UserContext.Provider value={{user, setUser, onLogin, handleLogout, signup, loggedIn}}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };