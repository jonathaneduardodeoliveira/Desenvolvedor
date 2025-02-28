import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Habilidades.css'; 

const Habilidades = () => {
  const navigate = useNavigate(); // Criando a instância de navigate

  const handleGoHome = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div className="habilidades">
      <h2>Habilidades</h2>
      <ul>
        <li>Java</li>
        <li>Spring Framework</li>
        <li>React.js</li>
        <li>HTML, CSS, JavaScript</li>
        <li>Python</li>
        <li>Banco de Dados (SQL, MySQL)</li>
        <li>Git e GitHub</li>
        <li>Manutenção de Sistemas Operacionais (Windows e Linux)</li>
        <li>Suporte Técnico</li>
        <li>Desenvolvimento de APIs REST</li>
        <li>Engenharia de Software</li>
      </ul>
      <button onClick={handleGoHome}>Voltar para a tela principal</button> {/* Botão adicionado */}
    </div>
  );
};

export default Habilidades;
