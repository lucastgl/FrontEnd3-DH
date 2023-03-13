import { useState } from 'react';
import {AppContainer} from './styles/styledComponents';
import { Form } from './components/Form';
import { Card } from './components/Card';
import './App.css'

function App() {
  const [view, setView ] = useState("register");
  const [values, setValues ] = useState(null);

  const handleFetchInfo = (userInformation) =>{
    setValues(userInformation);
    handleView("card");
  };

  const handleView = (page) =>{
    setView(page);
  };

  return (
    <AppContainer>
        {
          view === "register" && (<Form handleFetchInfo={handleFetchInfo}/>)
        }
        {
          view === "card" && (<Card {...values}/>)
        }
    </AppContainer>
  )
}

export default App
