import React, {useState} from 'react';
import styled from 'styled-components';
import {Alert, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { keyframes } from 'styled-components'


// const glitch = keyframes`
// 2%,64%{
//     transform: translate(2px,0) skew(0deg);
//   }
//   4%,60%{
//     transform: translate(-2px,0) skew(0deg);
//   }
//   62%{
//     transform: translate(0,0) skew(5deg); 
//   }
// `;

// const glitchTop = keyframes`
//   2%,64%{
//     transform: translate(2px,-2px);
//   }
//   4%,60%{
//     transform: translate(-2px,2px);
//   }
//   62%{
//     transform: translate(13px,-1px) skew(-13deg); 
//   }
// `;

// const glitchBotom = keyframes`
//   2%,64%{
//     transform: translate(-2px,0);
//   }
//   4%,60%{
//     transform: translate(-2px,0);
//   }
//   62%{
//     transform: translate(-22px,5px) skew(21deg); 
//   }
// }
// `;





// const WelcomeHeader = styled.div`

// /* body{ 
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   margin: 0;
//   background: #131313;
//   color: #fff;
//   font-size: 96px;
//   font-family: 'Fira Mono', monospace;
//   letter-spacing: -7px;
// } */


//   animation: glitch 1s linear infinite;



// &:before,
// &:after{
//   content: attr(title);
//   position: absolute;
//   left: 0;
// }

// &:before{
//   animation: glitchTop 1s linear infinite;
//   clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
//   -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
// }


// &:after{
//   animation: glitchBotom 1.5s linear infinite;
//   clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
//   -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
// }
// `

// const glitchEffect = styled.div`

// `


const WelcomeHeader = styled.h1`
    color: #e6aa0066 !important;
    text-align: center;
    text-shadow: -1px -1px 2px #0c0a05;

`

export function Welcome(props) {
    return <a href="https://petermeinders.com"><WelcomeHeader title="Peter Meinders">Peter Meinders</WelcomeHeader> </a>;

  }


 