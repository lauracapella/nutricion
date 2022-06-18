import React from "react";
import Menu from './Menu'

export default function MenusList({menusData}){
    const NUTRIENTES = menusData.nutrients;
return(
    <>
    <div className="d-flex flex-column justify-center mx-5 ">
        <div className='d-flex justify-content-center'>
            <h4 className='justify-content-center'>Calorias: {NUTRIENTES.calories.toFixed(0)}</h4>
        </div>
        <div className="d-flex justify-content-center mb-5 ">
                <p className="badge badge-pill badge-danger bg-danger m-2 p-2 pt-3 w-25">Carbohidratos <h4>{NUTRIENTES.carbohydrates.toFixed(0)}</h4></p>        
                <p className="badge badge-pill badge-warning bg-warning m-2 p-2 pt-3 w-25">Grasas <h4>{NUTRIENTES.fat.toFixed(0)}</h4></p>
                <p className="badge badge-pill badge-info bg-info m-2 p-2 pt-3 w-25">Proteïnas <h4>{NUTRIENTES.protein.toFixed(0)}</h4></p>
        </div>
    
    <div className="d-flex flex-row justify-content-center "> 
        {menusData.meals.map((e) => <Menu key={e.id} menu={ e }/>)} 
    </div>
    </div>
    </>
)
}