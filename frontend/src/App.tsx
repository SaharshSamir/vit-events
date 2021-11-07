import React from 'react';
import LandingPage from "./pages/LandingPage";
import Nav from './components/Nav';
import {Route, Switch} from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/Signup';


const App: React.FC = () => {
  return(
    <>
    <Nav/>  
    <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={SignUp}/>
    </Switch>
    </>
  )
}

export default App;
