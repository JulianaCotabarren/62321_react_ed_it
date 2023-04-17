import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Formulario from './components/Formulario/Formulario';

function App() {
  const [showForms,setShowForms] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  
  /* Cuando el formulario sea sólo para Login (initialState={datosLogin})=> va a tener 2 inputs: email y password */
  const datosLogin = {
    email:'',
    password:''
  }
  /* Hago un array con los valores de los atributos para los inputs del formulario de Login */
  const datosLoginInputs = [
    /* Para el input email: */
    {
      id:'emailID',
      type: 'email',
      placeholder: 'usuario@gmail.com',
      name: 'email'
    },
    /* Para el input password: */
    {
      id:'passwordID',
      type: 'password',
      placeholder: 'Usuario1234#',
      name: 'password'
    }
  ]

  /* Cuando el formulario sea sólo para Registro (initialState={datosRegistro})=> va a tener 3 inputs: email, password y repeatPassword */
  const datosRegistro = {
    email:'',
    password:'',
    repeatPassword:''
  }
  const datosRegistroInputs = [
    /* Para el input email: */
    {
      id:'emailID',
      type: 'email',
      placeholder: 'usuario@gmail.com',
      name: 'email'
    },
    /* Para el input password: */
    {
      id:'passwordID',
      type: 'password',
      placeholder: 'Usuario1234#',
      name: 'password'
    },
    /* Para el input repeatPassword: */
    {
      id:'repeatPasswordID',
      type: 'password',
      placeholder: 'Usuario1234#',
      name: 'repeatPassword'
    },
  ]

  const handleSubmit = (e,data) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="App text-danger">
      <Navbar navbar_items={["Home", "Link", "Disabled", "Tomas"]}/>
      <button onClick={() => setShowForms(!showForms)}>{ showForms ? 'Ocultar' : 'Mostrar'}</button>
      <Formulario 
        onSubmit={handleSubmit} 
        formTitle={!showLogin? 'Registro' : 'Login'} 
        initialState={!showLogin? datosRegistro : datosLogin} 
        inputs={!showLogin? datosRegistroInputs : datosLoginInputs}
        showLogin={showLogin}
      />
      <button onClick={() => setShowLogin(!showLogin)}>{!showLogin ? 'Ir a Login' : 'Ir a Registro'}</button>  
    </div>
  );
}

export default App;

