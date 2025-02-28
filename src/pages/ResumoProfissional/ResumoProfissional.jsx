import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './ResumoProfissional.css';

const ResumoProfissional = () => {
  const navigate = useNavigate(); // Inicializando o navigate

  // Função para voltar à página principal
  const handleBackClick = () => {
    navigate('/'); // Redireciona para a página principal (root)
  };

  return (
    <div className="resumo-profissional">
      <h2>Resumo Profissional</h2>
      <p>
        Sou um profissional com mais de 5 anos de experiência em Tecnologia da Informação, especializado em suporte técnico e manutenção de sistemas. Minha jornada começou como Auxiliar Administrativo na Microlins, onde desenvolvi habilidades organizacionais e de atendimento ao cliente. Posteriormente, na Ford, avancei de Auxiliar de TI a n2, aprimorando meus conhecimentos em hardware, software e suporte técnico, garantindo o funcionamento eficiente dos sistemas.
      </p>
      <p>
        Atualmente, atuo como TI na Halexistar. Minha experiência prática me proporcionou um entendimento sólido da infraestrutura de TI, permitindo-me oferecer soluções eficazes e rápidas para os desafios do dia a dia.
      </p>
      <p>
        Em transição para a área de desenvolvimento de software, concluí cursos de Java na Ada, além de Front-end, Engenharia de Software e Banco de Dados na DevStars Tech. Também finalizei formações em Lógica de Programação em Python, C, Banco de Dados MySQL e Fundamentos da Web (HTML, CSS, JavaScript).
      </p>
      <p>
        Apaixonado por tecnologia e acessibilidade, meu objetivo é desenvolver soluções inovadoras que impulsionem o crescimento das empresas e promovam a inclusão de pessoas com deficiência visual no setor tecnológico. Estou pronto para enfrentar novos desafios e contribuir com meu conhecimento e dedicação.
      </p>

      {/* Botão para voltar à tela principal */}
      <button onClick={handleBackClick} className="btn-voltar">
        Voltar para a tela principal
      </button>
    </div>
  );
};

export default ResumoProfissional;
