import Account from './Accountpage'
import './App.css';
import SignUp from './AccountCreation'
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <SignUp />
    </GlobalProvider>
  );
}

export default App;
