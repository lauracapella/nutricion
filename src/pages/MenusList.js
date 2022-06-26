import React from "react";
import Menu from './Menu'

export default function MenusList({menusData}){
    const NUTRIENTES = menusData.nutrients;
return(
    <>
    <div className="d-flex flex-column justify-content-center mx-2 ">
        <div className='d-flex justify-content-center mb-5 mx-5 p-2 border'>
            <h4 className='justify-content-center'>Calorias: {NUTRIENTES.calories.toFixed(0)}</h4>
        </div>
        <div className="d-flex justify-content-center mb-5 ">
                <p className="badge badge-pill badge-danger bg-danger m-2 p-2 pt-3 w-25">Carbohidratos <h4>{NUTRIENTES.carbohydrates.toFixed(0)}</h4></p>        
                <p className="badge badge-pill badge-warning bg-warning m-2 p-2 pt-3 w-25">Grasas <h4>{NUTRIENTES.fat.toFixed(0)}</h4></p>
                <p className="badge badge-pill badge-info bg-info m-2 p-2 pt-3 w-25">Proteïnas <h4>{NUTRIENTES.protein.toFixed(0)}</h4></p>
        </div>
    
    <div className="container d-flex "> 
        <div className="row justify-content-center">
        {menusData.meals.map((e) => <div className=" col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 p-1"><Menu key={e.id} menu={ e }/></div>)} 
        </div>
    </div>
    </div>
    </>
)
}