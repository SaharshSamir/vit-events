import React from "react";
import styled from "styled-components";

import logo from "../images/logo.png"; 


const Nav: React.FC=()=>{
    return (
        <NavStyled>
            <div className="left">
                <div className="logo">
                    <img  src={logo} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="aboutus">
                    <h4>About Us</h4>
                </div>
                <div className="loginSignup">
                    <h4><span>Login</span> or <span>Signup</span></h4>
                </div>
            </div>
        </NavStyled>
    );
}

const NavStyled=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
img{
    height: 4rem;
    margin: 0.2rem 0.5rem;
    filter: brightness(200%);
}
.right {
    display: flex;
    justify-content: space-between !important;
    align-items: center;
    .aboutus{
        margin: 0rem 20rem 0rem 0rem;
    }
    h4{
        span{
            margin: 1rem;
        }
    }
    align-items: center;
}

`
export default Nav;