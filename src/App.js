// import logo from './logo.svg';
import SignUp from './Components/SignUp';
import './App.css';
import { AuthUserProvider } from "./Components/firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
// import backloginImg from './images/loginBg.jpeg';

function App() {

  
  return (
    <> 
    <div  className="App">
        <AuthUserProvider> 
        {/* <Component {...pageProps} /> */}
        <SignUp/>
        </AuthUserProvider>
      </div>
    </>
  );
}

export default App;
