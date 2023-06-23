import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/HomePage";
import Login from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LogPage from './pages/LogPage/LogPage';

import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/students/:id" element={<LogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
