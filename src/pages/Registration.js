
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
            navigate('/');
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
        <>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
        type='email' 
        name='email' 
        placeholder='youremail@gmail.com'
        onChange={handleChange}/>

        <label htmlFor="password">Email</label>
        <input 
        type='password' 
        name='password' 
        id='password'
        onChange={handleChange}
        placeholder='******'/>

        <button>REGSITRARME</button>

        </form>
        </>
    )
}