import './App.css';
import React, {useState, useMemo} from 'react'
import MenusList from './pages/MenusList'
import {BrowserRouter as Router, Route, Routes, UNSAFE_RouteContext} from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Navegacion from './pages/Navegacion';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Buscador from './pages/Buscador';
//import UserContext from './UserContext'
import {AuthProvider} from './context/authContext'
import { ProtectedRoute } from './pages/ProtectedRoute';


function App() {
  const [usuario, setUsuario] = useState(null)
  const valorProvider = useMemo(() => ({usuario, setUsuario}, [usuario, setUsuario]))
  
  
  return (
  
    <Router>
   
    <Navegacion/>
    {/* <UserContext.Provider value={valorProvider} >
 */}
  <AuthProvider>
    <Routes>
        <Route path='/' element={ <Wellcome/> }/> 
        <Route path='/buscador' element={
          <ProtectedRoute>
        <Buscador />
        </ProtectedRoute>
        } />
        <Route path="/Login" element = {< Login />} />
        <Route path="/Registration" element = {< Registration/>} />
    </Routes>
    </AuthProvider>

{/* </UserContext.Provider> */}


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
