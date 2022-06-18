
import React from "react";
import UserContext from "../UserContext";
import useContext from 'react'


export default function Wellcome(){
    //console.log('hola ' + React.useContext(UserContext) )


    const msg = React.useContext(UserContext)
    
    return(
        <>
        <div>{msg}</div>
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