// import logo from './logo.svg';
import SignUp from './Components/SignUp';
import './App.css';
import { AuthUserProvider } from "./Components/firebase/auth";
// import backloginImg from './images/loginBg.jpeg';

function App() {

  const containerStyle ={
    // backgroundImage : `url(${backloginImg})`,
    backgroundColor : '#fafafa',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
  }


  return (
    <>
    <div style={containerStyle} className="App">
        <AuthUserProvider> 
   <SignUp/> 
        </AuthUserProvider>
      </div>
    </>
  );
}

export default App;
