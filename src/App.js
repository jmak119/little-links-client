import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/HomePage";
import SignIn from './pages/LoginPage/LoginPage';

import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element= { <SignIn /> } />
        <Route path="/home" element={<Homepage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
