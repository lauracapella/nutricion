/* import {useState} from 'react'
import Login from './Login'


function Registration2() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)

    function handleSubmit(e){
       e.preventDefault();
        if(!name || !email || !password){
            setFlag(true)
        }else{
            setFlag(false)
            console.log('saved in localstorage')
            localStorage.setItem('Name', JSON.stringify(name));
            localStorage.setItem('Email', JSON.stringify(email));
            localStorage.setItem('Password', JSON.stringify(password));

            console.log('saved in localstorage')

            setLogin(!login)
        }
    }

    function handleClick(){
        setLogin(!login)
    }


    return ( 
        <div className="">

        {login ? (
       <div className="m-auto mt-5 d-flex p-2 justify-content-center">

        <form className="form-group col-10 col-sm-10 col-md-10 col-lg-8 col-xl-6 mx-5" >
            <h1>Registro</h1>
            <div>
                <label>Nombre:</label>
                <input
                type='text'
                placeholder="Indica tu nombre"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                /> 
                <br/>

                 <label>Email:</label>
                <input
                type='text'
                placeholder="Indica tu email"
                onChange={e => setEmail(e.target.value)}
                className="form-control"
                />
                <br/>

                <label>Contraseña   :</label>
                <input
                type='text'
                placeholder="Indica tu Contraseña"
                onChange={e => setPassword(e.target.value)}
                className="form-control"
                />
                
            </div>
            <div className='float-end'>
                <button className='btn btn-light mt-2 ' type='submit' onClick={handleSubmit}>REGISTRARME</button>
            </div>
            <br />
            <p onClick={handleClick}>¡Ya estas registrado? {''} Login</p>

             {flag && (
                <p>Rellena todos loscampos</p>
            )} 

        </form>
        </div>
    ) : (
        <Login/>
        )}
        </div>
    )
}

export default Registration; */