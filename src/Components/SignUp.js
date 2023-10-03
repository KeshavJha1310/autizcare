import React from "react";
import * as Components from './ComponentForSignUp';
import { FcGoogle } from "react-icons/fc";

function SignUp() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                  
                     <Components.Title>Create Account</Components.Title>  
                      <Components.GoogleButton>
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                    </Components.GoogleButton>
                    <span>or</span>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign In</Components.Title>
                      <Components.GoogleButton>
                    <FcGoogle size={22} />
                    <span className="font-medium text-black group-hover:text-white">
                        Login with Google
                    </span>
                    </Components.GoogleButton>
                    <span>or</span>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sign In</Components.Button>
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