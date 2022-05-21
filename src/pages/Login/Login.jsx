import React, { useContext, useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from "axios";
import { Context } from '../../components/Context/Context';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../../firebase-config'
import {getDoc, doc} from 'firebase/firestore'

//rsc
function Login({onClose}) {

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const { dispatch, user } = useContext(Context)


        const handleLogin = async (e) => {
          e.preventDefault()
         dispatch({type: "LOGIN_START" })
         try {
           const res = await signInWithEmailAndPassword(auth, email, password)
           const querySnapshot = await getDoc(doc(db, 'userCollection' , res.user.uid))
           dispatch({type : "LOGIN_SUCCESS" , payload : querySnapshot._document.data.value.mapValue.fields})


           setEmail('')
           setPassword('')
         }
          catch (error) {
              console.log(error)
              dispatch({ type: "LOGIN_FAILURE" })
          }


  
      }




    return (
       <div className='overlay'>
            <form className='Login' onSubmit={handleLogin}>
            <img onClick={onClose} className="remove-Login" width={18} height={18} src="/remove.png" alt="remove"/>
              <div className='Login-descr'>
            <TextField
            value={email}
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            id="post-title"
            label="Введите email"
            variant="outlined"
            className="reg-input"
            required
            />

            <TextField
              value={password}
              type={password}
              onChange={(e) => setPassword(e.target.value)}
              id="post-title"
              label="Введите пароль"
              variant="outlined"
              className="reg-input"
              required
            />
            <Button onSubmit={handleLogin} onClick={handleLogin} type="sumbit" variant="contained">Войти</Button>
            </div>
        </form>
       </div>

    );
};

export default Login;