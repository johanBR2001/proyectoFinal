import React, {useState} from 'react';
import '../css/AppRestaurante.css'


import { LoginRestaurante } from './LoginRestaurante';
import { RegisterRestaurante } from './RegisterRestaurante';


function AppRestaurante() {
  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) =>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginRestaurante onFormSwitch = {toggleForm}/> : <RegisterRestaurante onFormSwitch = {toggleForm} />
      }
    </div>
  );
}

export default AppRestaurante;
