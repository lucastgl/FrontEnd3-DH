import { Fragment, useState } from 'react'
import {Login} from "./componentesForm/Login.jsx"
import { Register } from './componentesForm/Register.jsx'
import { User } from "./componentesForm/User.jsx"
import { MasterContainer } from './componentesForm/StyledForm.js'
import './App.css'

function App() {
  const [view, setView ] = useState("register");
  const [values, setValues ] = useState(null);

  const handleFetchInfo = (userInformation) =>{
    setValues(userInformation);
    handleView("login");
  };

  const handleCompare = (loginInfo) =>{
    if(loginInfo.email == values.email && loginInfo.password == values.password){
      handleView("user");
    }
  };

  const handleView = (page) =>{
    setView(page);
  };

  return (
    <Fragment>
      <nav>
        <menu>
          <button disabled={view === "register"} onClick={() => handleView("register")}>Register</button>
          <button disabled={view === "login"} onClick={() => handleView("login")}>Login</button>
        </menu>
      </nav>
      <MasterContainer>
        {
          view === "register" && (<Register handleFetchInfo={handleFetchInfo}/>)
        }
        {
          view === "login" && (<Login handleCompare={handleCompare}/>)
        }
        {
          view === "user" && (<User {...values}/>)
        }
      </MasterContainer>
    </Fragment>
  )
}

export default App
