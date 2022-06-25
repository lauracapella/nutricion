import { useState } from "react";
import MenusList from "./MenusList";
import React from "react";

 import {useAuth} from '../context/authContext'
import {useNavigate} from 'react-router-dom'

 


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

  const {user, logout, loading} = useAuth();
  const navigate = useNavigate();
  console.log(user)
   const handleLogOut = async () => {
       await logout()
   }

   if(loading) return  <h1>loading</h1>



    return(
    <>

    <p>Wellcome {user.email}</p>
     <button onClick={handleLogOut}>LogOut</button>

    <div className="d-flex justify-content-center m-5">
        <div className="mw-100 ">
        <h3>¿Quantas calorias vas a consumir hoy?</h3> 

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