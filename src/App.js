// import logo from './logo.svg';
import Welcome from './Components/Welcome';
import './App.css';
import {AuthUserProvider} from "./Components/firebase/auth";


function App() {
  return (
    <div className="App">
      <AuthUserProvider>
      <Welcome/>
      </AuthUserProvider>
    </div>
  );
}

export default App;
