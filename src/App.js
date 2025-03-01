import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Pages/login/LoginPage';
import { Route, Routes } from 'react-router-dom';
import Orderpage from './components/Pages/Order/Orderpage';
import ErreurPage from './components/Pages/erreur/ErreurPage';





function App() {
  return (
  <Routes>
    <Route path="/" element={<LoginPage />}/>
    <Route path="/Order/:username" element={<Orderpage />}/>
    <Route path="*" element={<ErreurPage />}/>
    
  </Routes>
  )
}

export default App;
