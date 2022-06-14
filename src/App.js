import './App.css';
import React, {useState} from 'react'
import MenusList from './pages/MenusList'

function App() {
  const API_KEY = 'bcb3f5e2c205486885c61c1621f39f98' ;
  const API_URL= `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalorias={calorias}`
  const [menuData, setMenuData] = useState(null);
  const [calorias, setCalorias] = useState(1200);

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

  //console.log(getMealData)
  return (
    <>
    <input
    type='number'
    placeholder='p.e 1800'
    onChange={handleChange}
    />
    <button onClick={getMealData}>Mr. recetas</button>
    {menuData && <MenusList menusData={menuData} />}
    </>
  );
}

export default App;
