import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Main from './pages/Main.jsx';
import Writers from './pages/Writers.jsx';


function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/writers" element={<Writers />} />
        <Route path="*" element={<h2>404 — Nie znaleziono strony</h2>} />
      </Routes>
    </>
  )
}

export default App;
