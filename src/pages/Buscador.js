import { useState } from "react";
import MenusList from "./MenusList";



export default function Buscador(){
  const [calorias, setCalorias] = useState(1800);
  const API_KEY = '90f272f6bec044debff90c278a79cc27' ;
  const API_KEY_2 ='47db0067b4cb45faaffcc2037bd7cc54';
  const API_URL= `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY_2}&timeFrame=day&targetCalories=${calorias}`
  const [menuData, setMenuData] = useState(null);

  function handleChange(event){
    setCalorias(event.target.value)
  }

  function getMealData (){
    fetch(
      API_URL
    )
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data);
        console.log(data)
      })
      .catch(() => {
        console.log("error");
      }
    );
    

  }
    return(
    <>
    <div className="d-flex justify-content-center m-5">
        <div className="mw-100 ">
        <h3>¿Quantas calorias vas a consumir hoy?</h3> 


{/*         <input className="form-control-lg "
            type='number'
            placeholder='Calorias (p.e 1800)'
            onChange={handleChange}
        /> 
    <button className="btn btn-secondary rounded-pill m-3 btn-lg" onClick={getMealData}>Buscar menú</button> <br /> */}
    <div className="row no-gutters mt-3 align-items-center">
        <div className="col col-md-8">
            <input 
            className="form-control border-secondary rounded-pill" 
            type='' 
            placeholder='Calorias (p.e 1800)'
            onChange={handleChange}/>
        </div>
        <div className="col-auto">
            
                <button className="btn btn-secondary btn-outline-light border-0 rounded-pill ml-n5 px-4 " 
                onClick={getMealData}>
                  Buscar menú
                  </button> 

        </div>
    </div>
    </div>
   

    </div>
    <div className="d-flex justify-content-center mx-5">
    {menuData && <MenusList menusData={menuData} />} 
    </div>
    </>
    )
}