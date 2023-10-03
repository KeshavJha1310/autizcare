import React , {useEffect, useState}from "react";
import * as Components from './ComponentForSignUp';
import { FcGoogle } from "react-icons/fc";
import {auth} from "./firebase/firebase";

import {

    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup

} 
from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./firebase/auth";
// import Loader from "./Loader";

const provider = new GoogleAuthProvider()

function SignUp() {
    const [signIn, toggle] = React.useState(true);
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const {authUser , isLoading} = useAuth();

    const navigate = useNavigate()

    useEffect(()=>{
        if(!isLoading && authUser){
            navigate('/dashboard')
        }
    },[authUser,isLoading,navigate])
    
    const loginHandler = async () => {

        if(!email || !password) return;

        try{
            const user = await signInWithEmailAndPassword(auth,email,password);
            console.log(user)
        }
        catch(error){

            console.log("error occured in SignIn :- " , error)
        }
    }

    const signinwithgoogle = async () => {
        try {
            const user = await signInWithPopup(auth , provider) 
            console.log(user)
        } catch (error) {
            console.log("error occured :- " ,error)
        }
    };

     return (
        
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                  
                     <Components.Title>Create Account</Components.Title>  
                      <Components.GoogleButton onClick={signinwithgoogle}>
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                    </Components.GoogleButton>
                    <span>or</span>
                     <Components.Input
                      type='text' 
                      placeholder='Name' 
                      onChange={(e)=>setEmail(e.target.value)}
                      required 
                       />
                     <Components.Input
                      type='email'
                       placeholder='Email' />
                     <Components.Input 
                     type='password' 
                     onChange={(e)=>setPassword(e.target.value)}
                     required
                     placeholder='Password' />
                     <Components.Button onClick={loginHandler}>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign In</Components.Title>
                      <Components.GoogleButton onClick={signinwithgoogle}>
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                    </Components.GoogleButton>
                    <span>or</span>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={loginHandler}>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         Thank you for being connected with us, please login with your personal info.
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Log In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Users!</Components.Title>
                       <Components.Paragraph>
                        Not a member yet? Enter your details and start your journey with AutizCare
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Register
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default SignUp;