import './App.css';
import React, {useState} from 'react'
import MenusList from './pages/MenusList'
import {BrowserRouter as Router, Route, Routes, UNSAFE_RouteContext} from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Navegacion from './pages/Navegacion';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Buscador from './pages/Buscador';
import UserContext from './UserContext'


function App() {
  /* const [calorias, setCalorias] = useState(1100);

  const API_KEY = '47db0067b4cb45faaffcc2037bd7cc54' ;
  const API_URL= `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calorias}`
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
  } */

  
  return (
  
    <Router>
   
    <Navegacion/>
    <UserContext.Provider value='Hola desde context'>

    <Routes>
      
        <Route path='/' element={<Wellcome/>}/> 
        <Route path='/buscador' element={<Buscador />} />
        <Route path="/Login" element = {< Login />} />
        <Route path="/Registration" element = {< Registration/>} />
    </Routes>

</UserContext.Provider>


    <br/>
    <br/>
    {/*  <input
    type='number'
    placeholder='p.e 1800'
    onChange={handleChange}
    /> 
    <button onClick={getMealData}>Mr. recetas</button>
    {menuData && <MenusList menusData={menuData} />}  */}
    </Router>
  
  );
}

export default App;
