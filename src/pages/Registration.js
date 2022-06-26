
import {useState} from 'react'
import {useAuth} from '../context/authContext'
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

export default function Registration() {
    const [user, setUser] = useState({
        user:'',
        password:'',
    });

    const {signup} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}})=> setUser({...user, [name]: value});
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try{
            await signup(user.email, user.password);
            navigate('/Buscador');
        }catch (error){
            if (error.code === 'auth/invalid-email'){
                setError('Correo invalido ')
            }else if (error.code === 'auth/weak-password'){
                setError('La contrasña debe contener al menos 6 carácteres')
            }else if (error.code === 'auth/email-already-in-use'){
                setError('Usuario ya registrado con este email')
            }else{
                setError(error.message)
            }
    }
    }

    return(
        <div className='col-12 col-sm-10 col-md-10 col-lg-8 col-xl-6 mt-5 mx-auto '>
        
        <div className="m-auto justify-content-center">
        <h3 className='text-center'>REGISTRO</h3>

        <form onSubmit={handleSubmit} className="form-group  mx-5">
        <label htmlFor="email">Email</label>
        <input 
        type='email' 
        name='email' 
        placeholder='youremail@gmail.com'
        onChange={handleChange}
        className="form-control form-control-lg"/>
        <br />

        <label htmlFor="password">Email</label>
        <input 
        type='password' 
        name='password' 
        id='password'
        onChange={handleChange}
        placeholder='******'
        className="form-control form-control-lg"/>

        <br/>

        <div className='text-danger'>
            <p>{error && <p>{error}</p>}</p>
        </div>

        <button className='btn btn-large btn-block btn-secondary w-100'>REGSITRARME</button>

        </form>
        </div>
        </div>
    )
}