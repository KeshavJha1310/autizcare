import React , {useEffect, useState}from "react";
import * as Components from './ComponentForSignUp';
// import { FcGoogle } from "react-icons/fc";
import {auth} from "./firebase/firebase";

import {

    signInWithEmailAndPassword,
    // GoogleAuthProvider,
    //signInWithPopup,
    createUserWithEmailAndPassword , 
    updateProfile,

} 
from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./firebase/auth";
// import Loader from "./Loader";

// const provider = new GoogleAuthProvider()

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
const Doctoken = localStorage.getItem("DocauthToken");

// Check if the user exists in session
const DocsessionUser = JSON.parse(sessionStorage.getItem("DocauthUser"));

if (!Doctoken && !DocsessionUser) {
  // If both token and user exist, navigate to "/"
  console.log("authUser:", authUser);
  console.log('User authenticated');
  navigate("/t/auth");
}else{
    navigate("/t/dashboard");
}
},[authUser,navigate]);
    
    const loginHandler = async () => {

        if(!email || !password) return;

        try{
            const user = await signInWithEmailAndPassword(auth,email,password);
             // Store the token in local storage
      const idToken = await user.getIdToken();
      localStorage.setItem("DocauthToken", idToken);

      // Store the user in session
      sessionStorage.setItem("DocauthUser", JSON.stringify(user));
            console.log(user)
            navigate("/t/dashboard");
            alert("Successfully sign-in")
        }
        catch(error){
            alert("Error during sign-in. Please try again.", error);
            console.log("error occured in SignIn :- " , error)
        }
    }

//     const signinwithgoogle = async () => {
//       try {
//         const user = await signInWithPopup(auth, provider);
    
//         // Check if the user is null
        

// if (user) {
//   // Extract user information
//   const uid = user.uid;
//   const email = user.email;
//   const displayName = user.displayName;
//   // Add more properties as needed

//   // Store each field in local storage
//   localStorage.setItem("authTokenUid", uid);
//   localStorage.setItem("authTokenEmail", email);
//   localStorage.setItem("authTokenDisplayName", displayName);
//   // Add more lines to store additional fields if needed

//   // Store the user data in session storage
//   sessionStorage.setItem("authUser", JSON.stringify({ uid, email, displayName }));
  
//   // After successful sign-in with Google, update the AuthUser context
//   setAuthUser({ uid, email, displayName });
//   navigate("/");
// }
//       } catch (error) {
//         console.log("error in pop up:", error);
//       }
//     };


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
      localStorage.setItem("DocauthToken", idToken);

      // Store the user in session
      sessionStorage.setItem("DocauthUser", JSON.stringify(newUser));

      setAuthUser({
        uid: newUser.uid,
        email: newUser.email,
        username,
      });
      navigate("/therapistProfileform");
      alert("Successfully account created!")
      console.log(username);
    } catch (error) {
        alert("Error during sign-up. Please try again.", error);

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
                      {/* <Components.GoogleButton onClick={signinwithgoogle}>
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                    </Components.GoogleButton> 
                    <span>or</span>*/}
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
                      {/* <Components.GoogleButton onClick={signinwithgoogle}>
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                    </Components.GoogleButton>
                    <span>or</span> */}
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
                       <Components.Title>Hello, Therapist!</Components.Title>
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