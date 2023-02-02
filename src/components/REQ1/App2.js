import React, {useState} from 'react';
import '../css/App.css'
import { Login } from './Login';
import { Register } from './Register';


function App2() {
  const[currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) =>{
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm} />
      }
    </div>
  );
}

export default App2;
