import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Home from './pages/Home/Home';
import Habilidades from './pages/Habilidades/Habilidades';
import Projetos from './pages/Projetos/Projetos';
import ResumoProfissional from './pages/ResumoProfissional/ResumoProfissional';
import Sobre from './pages/Sobre/Sobre';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/logo.jpg" className="App-logo" alt="logo" />
        </header>

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/resumo-profissional" element={<ResumoProfissional />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
