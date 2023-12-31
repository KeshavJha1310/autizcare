import styled from 'styled-components';
import backgroundImage from '../images/welcome.jpeg'; 
// import backloginImg from '../images/loginBg.jpeg';

// export const App = styled.div`
// background-image: url(${backloginImg});
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// `

export const Container = styled.div`
background-color: #fff;
border-radius: 10px;
/* Create a lifted box-shadow effect */
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 678px;
max-width: 100%;
min-height: 400px;
`;


export const GoogleButton = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  color: black;
  width: 100%;
  padding: 0.7rem;
  margin-top: 1rem;
  border-radius: 9999px; /* Rounded full in Tailwind */
  transition: transform 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white
  }

  &:active {
    transform: scale(0.9);
  }

  .group:hover & {
    color: black;
  }
`;


export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
`;

export const Input = styled.input`
background-color: #eee;
border: none;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid grey;
   background-color: 'light';
   color: black;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: black;
`;

export const Anchor = styled.a`

color: #333;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
`;
export const OverlayContainer = styled.div`
background-image:url(${backgroundImage});
background-repeat:no-repeat;
background-size:cover;
background-position:center;
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
// background: #ff416c;
//background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
// background: linear-gradient(to right, #ff4b2b, #ff416c);
// background-repeat: no-repeat;
// background-size: cover;
// background-position: 0 0;
color: black;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: -1 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;