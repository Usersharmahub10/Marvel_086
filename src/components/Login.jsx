import React from 'react'
import styled ,{ keyframes } from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTAlogoone src="/images/lg2.png" />
            <SignUp >GET ALL THERE</SignUp>
            <Description>I have created a Responsive Marvel Website using React Frontend .I am a fan of Marvel so I have decided to display some of my favourite marvel movies in this frontend project .Also I have used some unique designs and animations using React & Redux.</Description>
            <CTAlogotwo src="/images/fire.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}
const Container = styled.section`
  overflow : hidden;
  display : flex;
  flex-direction : column;
  text-align : center;
  height : 100vh;
  `;
const Content = styled.div`
margin-bottom : 10vw;
width : 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display : flex;
justify-content: center;
align-items : center;
flex-direction: column; 
height: 100%;
padding :80px 40px;
`;
const BgImage = styled.div`
height : 100%;
background-position : top;
background-size : cover;
background-repeat : no-repeat;
background-image : url("/images/bgblck.jpg");
position: absolute;
top: 0;
right: 0;
left : 0;
z-index : -1;
`;
const CTA = styled.div`
  
  max-width :650px;
   width: 100%;
   display :flex;
  flex-direction: column;
  

`;
const glowAndScale = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.7);
  }
`;
const CTAlogoone = styled.img`
 margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  will-change: transform, box-shadow; /* Optimize for GPU */

  &:hover {
    animation: ${glowAndScale} 1s infinite; /* Infinite animation on hover */
  }
`;
const SignUp = styled.a`
 font-weight : bold;
 color : #f9f9f9;
 background-color : #EF0107;
 margin-bottom: 12px;
 width : 100%;
 letter-spacing :1.5px;
 font-size : 18px;
 padding: 16.5px 0;
 border : 1px solid transparent;
 border-radius : 4px;
 &:hover {
  background-color: #ED2939;
  }
 `;
const Description = styled.p`
color : hsla(0, 0%, 95.3%, 1);
font-weight : bold;
font-size : 11px;
margin : 0 0 24px;
line-height : 1.5;
letter-spacing : 1.5px;


`;
const CTAlogotwo = styled.img`
 max-width: 300px; 
  margin-bottom: 20px;

  vertical-align: bottom;
  width: 100%;
  display: block;
  margin: 0 auto; 
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(173, 216, 230, 0.8); /* Light blue shadow with inward movement */
    transform: scale(0.95); /* Scales down slightly on hover */
  }
`;
export default Login;
