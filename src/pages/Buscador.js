import { useState } from "react";
import MenusList from "./MenusList";
import React from "react";
import {useAuth} from '../context/authContext'
import {useNavigate} from 'react-router-dom' 

export default function Buscador(){
  const [calorias, setCalorias] = useState(1800);
  //const API_KEY = '90f272f6bec044debff90c278a79cc27' ;
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
  const handleLogOut = async () => {
       await logout()
   }

   if(loading) return  <h1>loading</h1> 

    return(
    <>
      <div className='container'>
        <div className="row d-flex justify-content-end h-100"> 
          <p className="col-auto my-auto">Hola, {user.displayName || user.email}.</p>
          <button className="col-auto btn btn-link link-dark" onClick={handleLogOut}>LogOut</button>
        </div>
      </div> 

    <div className="d-flex justify-content-center">
        <div className="m-5 ">
        <h5 className="justify-content-center mx-5 text-center">¿Quantas calorias quieres consumir hoy?</h5> 
    <div className="mt-3 align-items-center">
        <div className="input-group">
            <input 
            className="form-control border-secondary rounded-pill" 
            type='text' 
            placeholder='Calorias (p.e 1800)'
            onChange={handleChange}
            />
        <div className="input-group-append">
           <button 
              className="btn btn-secondary bg-success text-white btn-outline-light border-0 rounded-pill px-4 " 
              onClick={getMealData}>
                  VER MENÚ
            </button> 
        </div>
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