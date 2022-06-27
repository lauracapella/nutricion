import React from "react";
import Menu from './Menu'

export default function MenusList({menusData}){
    const NUTRIENTES = menusData.nutrients;
return(
    <>
    <div className="content ">
        <div className='row justify-content-center'>
            <div className='d-flex justify-content-center p-2 border col-9'>
                <h4 className='pt-2'>Calorias: {NUTRIENTES.calories.toFixed(0)}</h4>
            </div>
        </div>
        <div className='content'>
            <div className="row d-flex justify-content-center mb-5 m-2 ">
                <p className=" col-3 badge badge-pill badge-danger bg-danger m-2  pt-3">Carbohidratos <h4>{NUTRIENTES.carbohydrates.toFixed(0)}</h4></p>        
                <p className="col-3  badge badge-pill badge-warning bg-warning m-2 pt-3">Grasas <h4>{NUTRIENTES.fat.toFixed(0)}</h4></p>
                <p className="col-3  badge badge-pill badge-info bg-info m-2 pt-3">Proteïnas <h4>{NUTRIENTES.protein.toFixed(0)}</h4></p>
            </div>
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