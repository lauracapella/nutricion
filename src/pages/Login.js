
import {useState} from 'react'
import {useAuth} from '../context/authContext'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({
        user:'',
        password:'',
    });

    const {login, loginWithGoogle, resetPassword} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleGoogleSignIn = async () => {
        try{
            await loginWithGoogle();
            navigate('../buscador')
        }catch (error){
            setError(error.message)
        }

    }

    const handleResetPassword= async() => {
    if(!user.email) return setError('Introduce un email')
        try{
        setError('Has recibido un email con las inidcaciones para resetear la contraseña')
            await resetPassword (user.email)
        }catch(error){
            setError(error.message)
        }
    }

    const handleChange = ({target: {name, value}})=> setUser({...user, [name]: value});
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try{
            await login(user.email, user.password);
            navigate('../buscador')
            
        }catch (error){
            if (error.code === 'auth/invalid-email'){
                setError('Correo invalido ')
            }else if (error.code === 'auth/weak-password'){
                setError('La contrasña debe contener al menos 6 carácteres')
            }else if (error.code === 'auth/email-already-in-use'){
                setError('Usuario ya registrado con este email')
            }else if (error.code === 'auth/missing-email'){
                setError('Indica email')
            }else if (error.code === 'auth/internal-error'){
                setError('Indica  contraseña')
            }else{
                setError(error.message)
            }
    }
    }

    return(
        <div className='col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 mt-5 mx-auto '>
        
        <div className="m-auto justify-content-center">
        <h3 className='text-center'>LOGIN</h3>
       
        <form onSubmit={handleSubmit} className="form-group  mx-5">
            <label htmlFor="email">Email</label>
            <input 
            type='email' 
            name='email' 
            placeholder='youremail@gmail.com'
            onChange={handleChange}
            className="form-control form-control-lg"/>
            <br/>

            <label htmlFor="password">Contraseña</label>
            <input 
            type='password' 
            name='password' 
            id='password'
            onChange={handleChange}
            placeholder='******'
            className="form-control form-control-lg"
            />
            <br/>

            <div className='text-danger'>
                <p>{error && <p>{error}</p>}</p>
            </div>

            <button className='btn btn-large btn-block btn-secondary w-100'>Log In</button>
            <div className='text-end p-2'>
                <a className='boton_contraseña' href='#!' onClick={handleResetPassword}>Recuperar contraseña</a>
            </div>
        </form>
        </div>
        <hr></hr>
        <div className=' mx-5 pt-4'>
            <button className='btn btn-large btn-block btn-dark w-100' onClick={handleGoogleSignIn}>Login con Google</button>
        </div>
        </div>
    )
}