import Login from './components/Login';
import { ThemeProvider } from './context/theme';
import UserContextProvider from './context/UserContextProvider';
import ThemeBtn from './components/ToggleBtn';
import './App.css';

function App() {
  return (
    <div className='dark:bg-black'>
      <ThemeProvider>
        <UserContextProvider>
          <ThemeBtn />
          <Login />
        </UserContextProvider>
      </ThemeProvider>
    </div>
  )
}

export default App;
