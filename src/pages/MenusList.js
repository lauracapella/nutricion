import React from "react";
import Menu from './Menu'

export default function MenusList({menusData}){
    const NUTRIENTES = menusData.nutrients;
    console.log(menusData.nutrients)
return(
    <>
    Soy la lista de menus sugeridos
    <ul>
        <li>Calories: {NUTRIENTES.calories.toFixed(0)}</li>
        <li>Carbohidratos: {NUTRIENTES.carbohydrates.toFixed(0)}</li>        
        <li>Grasas: {NUTRIENTES.fat.toFixed(0)}</li>
        <li>Proteïnas: {NUTRIENTES.protein.toFixed(0)}</li>

    </ul>
    <div> 
        {menusData.meals.map((e) => <Menu key={e.id} menu={ e }/>)
            } 
    </div>
    </>
)
}