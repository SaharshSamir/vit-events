import React from "react";
import styled from "styled-components";


const Slide: React.FC=()=>{
    return (
        <Main>
            <div className="slide">
                
            </div>
            <div className="text">
                    <div className="head">
                    VIT EVENTS
                    </div>
                    <div className="desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </div>
            </div>
        </Main>
    );
}

const Main=styled.div`
display: flex;
align-items: center;
justify-content: center;
.slide{
    height: 140vh;
    width:100%;
    background-color: black;
    margin-right: 4rem;
    opacity: 0.8;
    transform: translateY(-20rem);
    margin-top: -10rem;
    margin-left: -4rem;
    transform: rotate(-12deg);
}

`

export default Slide;