import {useRef, useState, useEffect} from "react"; 
import Wellcome from "./Wellcome";

const Login = () =>{

    const [emailLog, setEmailLog] = useState('');
    const [passwordLog, setPasswordLog] = useState('');
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    const[isAutheticated, setisAutheticated] = useState(false);


    function handleLogin(e){
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");

        if(!emailLog || !passwordLog){
            setFlag(true)
        } else if (passwordLog !== pass || emailLog !== mail){
            setFlag(true)

        }else{
            setHome(!home)
            setFlag(false)
            setisAutheticated(true);
        }
    }
    
    return(
        <div className="m-auto mt-5 d-flex p-2 justify-content-center">

        { home ? (
         
         <form className='form-group col-10 col-sm-10 col-md-10 col-lg-8 col-xl-6 mx-5' onSubmit={ handleLogin }>
             <h1>Login</h1>
                <label>Email:</label>
                <input
                    type='text'
                    placeholder="Indica email"
                    onChange={e => setEmailLog(e.target.value)}
                    className="form-control"
                />
                <br/>

                <label>Contraseña:</label>
                <input
                    type='text'
                    placeholder="Indica contraseña"
                    onChange={e => setPasswordLog(e.target.value)}
                    className="form-control"
                />
                <div className='float-end'>
                    <button className='btn btn-light mt-2 ' type='submit'>LOG IN</button>
                </div>
           
             {flag && (
                <p>Rellena todos los campos del formulario</p>
            )} 
         </form>
         ) : (
             <Wellcome />
         ) }
        </div>
      
        
        )}

export default Login;