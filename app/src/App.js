import Account from './Accountpage'
import './App.css';
import SignUp from './AccountCreation'
import { GlobalProvider } from './context/GlobalContext'
import Login from './Login';

function App() {
  return (
    <GlobalProvider>
      <Login />
    </GlobalProvider>
  );
}

export default App;
