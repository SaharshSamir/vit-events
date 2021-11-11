import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { useLocation } from "react-router";
import vitlogo from "../images/vitlogo.png";

const Nav: React.FC=()=>{

    const location=useLocation();
    const path=location.pathname;
    console.log(path);
    return (
        <NavStyled style={ path!=="/" ? {background: "black", color: "white"}:{}} >
            <div className="left">
                <div className="logo">
                    <img  src={vitlogo} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="aboutus">
                    <h4>About Us</h4>
                </div>
                <div className="loginSignup">
                    <h4><Link style={ path!=="/" ? {background: "black", color: "white"}:{}} to="/login">Login </Link><span>or</span><Link style={ path!=="/" ? {background: "black", color: "white"}:{}} to="/signup">Signup</Link></h4>
                </div>
            </div>
        </NavStyled>
    );
}

const NavStyled=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
border-radius: 0 0 1rem 1rem;
z-index: 2;
a{
    text-decoration: none;
    color:black;
}
img{
    height: 4rem;
    margin: 0.2rem 0.5rem;
    filter: brightness(200%);
}
.right {
    display: flex;
    justify-content: space-evenly !important;
    align-items: center;
    *{
        margin-right:2rem ;
    }
    
}

`
export default Nav;