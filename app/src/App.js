// import {  BrowserRouter,  Routes,  Route }  from 'react-router-dom'
import './App.css';
// import SignUp from './Register'
// import Login from './Login';
// import Profile from './profile'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
      <GlobalProvider>
      <Navbar />
      <h1>{process.env.REACT_APP_MYENVVAR}</h1>
      <Outlet />
    </GlobalProvider>
  );
}

export default App;
