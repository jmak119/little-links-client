import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Homepage from "./pages/HomePage/HomePage";
import Login from './pages/LoginPage/LoginPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LogPage from './pages/LogPage/LogPage';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div id="root">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/students/:id" element={<LogPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;