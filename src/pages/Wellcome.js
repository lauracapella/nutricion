
import React from "react";
/* import {useAuth} from '../context/authContext'
import {useNavigate} from 'react-router-dom'

  */

export default function Wellcome(){
/* 
   const {user, logout, loading} = useAuth();
   const navigate = useNavigate();
   console.log(user)
    const handleLogOut = async () => {
        await logout()
    }

    if(loading) return  <h1>loading</h1> */
    
    return(
        <>
{/*         <p>Wellcome {user.email}</p>
        <button onClick={handleLogOut}>LogOut</button> */}
        <div className="container me-0">
            <div className="row h-100">
                <div className="col-sm my-auto">
                    <h1>Busca diferentes ideas para tus menus diarios</h1>
                    <p>Indica el numero de calorias que necesitas y te proponemos un menu diaro compuesto por un desayuno, comida y cena.
                    Puedes buscar tantos menus como desees.
                    Recuerda que los menus deben ser equilibrados y deben fundamentarse en el consumo de frutas y verduras.  
                    </p>
                </div>
                <div className="col-sm my-auto">
                    <img className="img_wellcome" src={require("./img/foodie-intro-bag.jpg")} alt="veguies"/>
                </div>
            </div>
        </div>
        </>
    )
}