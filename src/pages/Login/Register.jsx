import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase-config'


function Register({onClose})  {
    const [email,setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password,setPassword] = useState("")


  

   const handleRegister =async (e) => {
       e.preventDefault()
       const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
    }
   

    return ( 
        <div className="overlay">
        <form className="Register" onSubmit={handleRegister}>
        <img onClick={onClose} className="remove-Login" width={18} height={18} src="/remove.png" alt="remove"/>
        <div className="Register-descr">
            <TextField
            value={email}
            type={email}
            onChange={(e)  => setEmail(e.target.value)}
            id="post-title"
            label="Введите email"
            variant="outlined"
            className="reg-input"
            required
            />
             <TextField
            value={login}
            onChange={(e)  => setLogin(e.target.value)}
            id="post-title"
            label="Введите логин"
            variant="outlined"
            className="reg-input"
            required
            />
              <TextField
            value={password}
            type={password}
            onChange={(e)  => setPassword(e.target.value)}
            id="post-title"
            label="Придумайте пароль"
            variant="outlined"
            className="reg-input"
            required
            />
            <Button type="sumbit" variant="contained">Зарегистрироваться</Button>
            </div>
        </form>
        </div>
    );
};

export default Register;