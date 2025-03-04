import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import './App.css';

import Home from './pages/Home/Home';
import Habilidades from './pages/Habilidades/Habilidades';
import Projetos from './pages/Projetos/Projetos';
import ResumoProfissional from './pages/ResumoProfissional/ResumoProfissional';
import Sobre from './pages/Sobre/Sobre';

// Componente para rolar para o topo sempre que a rota mudar
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Garante que a página sempre rola para o topo
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Componente que garante o scroll para o topo */}
      <div className="App">
        <header className="App-header">
          <img 
            src={`${process.env.PUBLIC_URL}/logo.jpg`} 
            className="App-logo" 
            alt="logo" 
            title="No topo, há uma imagem de perfil de um homem sorrindo, vestindo uma camisa listrada"
            aria-label="Imagem de perfil de um homem sorrindo, vestindo uma camisa listrada"
          />
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
