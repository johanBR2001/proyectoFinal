import React, {useState} from 'react';
import '../css/AppCliente.css'
import { LoginCliente} from './LoginCliente';
import { RegisterCliente } from './RegisterCliente';


function AppCliente() {
  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) =>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginCliente onFormSwitch = {toggleForm}/> : <RegisterCliente onFormSwitch = {toggleForm} />
      }
    </div>
  );
}



export default AppCliente;
