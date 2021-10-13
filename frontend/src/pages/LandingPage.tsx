import React from "react";
import  Nav  from "../components/Nav";
import styled from "styled-components";
import Slide from "../components/SlideAndText";
import GlobalStyle from "../GlobalStyles";


const LandingPage: React.FC=()=>{
    return(
        <>
        <Nav/>
        <Slide/>
        <GlobalStyle/>
        </>
    )
}


export default LandingPage;