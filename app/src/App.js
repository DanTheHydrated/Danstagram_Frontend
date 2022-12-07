import {  BrowserRouter,  Routes,  Route }  from 'react-router-dom'
import './App.css';
import SignUp from './Register'
import Login from './Login';
import Profile from './profile'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState';

function App() {
  // const [page, setPage] = useState("Login");
  // const [profile, setProfile] = useState('')
  // const api = 'https://8000-danthehydra-workingfina-hfb2p5jdcyp.ws-us77.gitpod.io/api/'

  // function onClick(text) {
  //   setPage(text)
  // }

  // if (page === 'Login') {
    return (
      <GlobalProvider>
      <Navbar />
      <h1>{process.env.REACT_APP_MYENVVAR}</h1>
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
