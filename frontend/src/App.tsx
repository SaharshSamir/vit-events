import React from 'react';
import LandingPage from "./pages/LandingPage";
import Nav from './components/Nav';
import {Route,Routes} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/Signup';


const App: React.FC = () => {
  return(
    <>
    <Nav/>  
    <Routes>
    <Route path="/"  element={<LandingPage/>} />
    <Route path="/login"  element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App;
