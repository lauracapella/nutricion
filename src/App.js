import './App.css';
import React, {useState, useMemo} from 'react'
import {BrowserRouter as Router, Route, Routes, UNSAFE_RouteContext} from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Login from './pages/Login';
import Registration from './pages/Registration';
import Navegacion from './pages/Navegacion';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Buscador from './pages/Buscador';
import {AuthProvider} from './context/authContext'
import { ProtectedRoute } from './pages/ProtectedRoute';


function App() {
  const [usuario, setUsuario] = useState(null)
  const valorProvider = useMemo(() => ({usuario, setUsuario}, [usuario, setUsuario]))
  
  return (
    <Router>
    <Navegacion/>
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
    </Router>
  );
}

export default App;
