
import React from "react";
import { Link } from "react-router-dom";

export default function Wellcome(){
    return(
        <>
        <div className="container px-0 sin_margen">
            <div className="row h-100 ">
                <div className="col-12 col-sm-12 col-md-12 col-lg my-auto p-5 texto_wellcome">
                    <h1>Busca diferentes ideas para tus menus diarios</h1>
                    <p>Indica el numero de calorias que necesitas y te proponemos un menu diaro compuesto por un desayuno, comida y cena.
                    Puedes buscar tantos menus como desees.
                    Recuerda que los menus deben ser equilibrados y deben fundamentarse en el consumo de frutas y verduras.  
                    </p>
                    <button className="buscar_home border-0 rounded-pill ml-n5 px-4 py-2"><Link to='./Buscador'>Encuentra mi menú diario</Link></button>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg  ">
                    <img className="img_wellcome " src={require("./img/foodie-intro-bag.jpg")} alt="veguies"/>
                </div>
            </div>
        </div>
        </>
    )
}