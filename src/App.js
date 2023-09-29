// import logo from './logo.svg';
import SignUp from './Components/SignUp';
import './App.css';
import {AuthUserProvider} from "./Components/firebase/auth";


function App() {
  return (
    <div className="App">
      <AuthUserProvider>
      <SignUp/>
      </AuthUserProvider>
    </div>
  ); 
}

export default App;
