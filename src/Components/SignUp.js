import React , {useEffect, useState}from "react";
import * as Components from './ComponentForSignUp';
import { FcGoogle } from "react-icons/fc";
import {auth} from "./firebase/firebase";

import {

    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword , 
    updateProfile,

} 
from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./firebase/auth";
// import Loader from "./Loader";

const provider = new GoogleAuthProvider()

function SignUp() {
    const [signIn, toggle] = React.useState(true);
    const [email,setEmail] = useState(null);
    const [email_S,setEmail_S] = useState(null);
    const [password_S,setPassword_S] = useState(null);
    const [password,setPassword] = useState(null);
    const [username,setUsername] = useState(null);
    const {authUser ,  setAuthUser}  = useAuth();
    let newUser = null
    const navigate = useNavigate()
    useEffect(()=>{
        // if(authUser){
        //     console.log("authUser:", authUser);
        //     console.log('User authenticated');
        //     navigate('/')
        // }else{
        //     console.log("authUser:", authUser);
        //     console.log('User not authenticated');
        // }
// Check if the token exists in local storage
const token = localStorage.getItem("authToken");

// Check if the user exists in session
const sessionUser = JSON.parse(sessionStorage.getItem("authUser"));

if (token && sessionUser) {
  // If both token and user exist, navigate to "/"
  console.log("authUser:", authUser);
  console.log('User authenticated');
  navigate("/");
}
},[authUser,navigate]);
    
    const loginHandler = async () => {

        if(!email || !password) return;

        try{
            const user = await signInWithEmailAndPassword(auth,email,password);
             // Store the token in local storage
      const idToken = await user.getIdToken();
      localStorage.setItem("authToken", idToken);

      // Store the user in session
      sessionStorage.setItem("authUser", JSON.stringify(user));
            console.log(user)
        }
        catch(error){

            console.log("error occured in SignIn :- " , error)
        }
    }

    const signinwithgoogle = async () => {
        try {
          const user = await signInWithPopup(auth, provider);
          // Check if the user is null
    if (user === null) {
        console.log("User is null");
        return;
      }
  
           // Store the token in local storage
         const idToken = await newUser.getIdToken();
      localStorage.setItem("authToken", idToken);

      // Store the user in session
      sessionStorage.setItem("authUser", JSON.stringify(user));
          console.log(user);
      
          // After successful sign-in with Google, update the AuthUser context
          setAuthUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName,
          });
      
          // Navigate to the desired route
          navigate("/");
        } catch (error) {
          console.log("error in pop up :- ", error);
        }
      };

const signUpHandler = async () => {
    console.log("signUp button clicked");
    if (!email_S || !username || !password_S) return;
    try {
      console.log("into try....");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email_S,
        password_S
      );
      newUser = userCredential.user; // Access the User object from UserCredential
      console.log("User authenticated:", newUser);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      // Store the token in local storage
      const idToken = await newUser.getIdToken();
      localStorage.setItem("authToken", idToken);

      // Store the user in session
      sessionStorage.setItem("authUser", JSON.stringify(newUser));

      setAuthUser({
        uid: newUser.uid,
        email: newUser.email,
        username,
      });
      navigate("/");
      console.log(username);
    } catch (error) {
      console.log("error in signUp", error);
    }
    console.log("exited from try catch...");
  };
  
   

     return (
        <>
        {/* <form onSubmit={(e)=>e.preventDefault()}> */}
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form onSubmit={(e)=>e.preventDefault()}>
                  
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
                      onChange={(e)=>setUsername(e.target.value)}
                      required 
                       />
                     <Components.Input
                      type='email'
                       placeholder='Email'
                       onChange={(e)=>setEmail_S(e.target.value)}
                       required
                       />
                     <Components.Input 
                     type='password' 
                     onChange={(e)=>setPassword_S(e.target.value)}
                     required
                     placeholder='Password' />
                     <Components.Button onClick={signUpHandler}>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={(e)=>e.preventDefault()} >
                    {/* <form onSubmit={(e)=>e.preventDefault()}> */}
                      <Components.Title>Sign In</Components.Title>
                      <Components.GoogleButton onClick={signinwithgoogle}>
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                    </Components.GoogleButton>
                    <span>or</span>
                      <Components.Input 
                      type='email'
                       placeholder='Email'
                       onChange={(e)=>setEmail(e.target.value)}
                       />
                      <Components.Input 
                      type='password'
                       placeholder='Password' 
                       onChange={(e)=>setPassword(e.target.value)}
                       required
                       />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button onClick={loginHandler}>Sign In</Components.Button>
                      {/* </form> */}
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
         {/* </form> */}
         </>
     )
}

export default SignUp;