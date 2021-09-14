import React from "react";
import logo from "../images/logo.png"; 


export const Nav: React.FC=()=>{
    return (
        <div className="NavComponent">
            <div className="left">
                <div className="logo">
                    <img style={{width:"10rem", height:"10rem"}}  src={logo} alt="" />
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    );
}