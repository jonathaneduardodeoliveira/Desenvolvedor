import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './Sobre.css';

const Sobre = () => {
  const navigate = useNavigate(); // Inicializando o navigate

  // Função para voltar à página principal
  const handleBackClick = () => {
    navigate('/'); // Redireciona para a página principal (root)
  };

  return (
    <div className="sobre">
      <h2>Sobre Mim</h2>
      <p>
        Sou um entusiasta da tecnologia com uma paixão especial por acessibilidade e inovação. Tenho mais de 5 anos de experiência em Tecnologia da Informação, e estou em constante aprendizado para acompanhar as tendências do setor. Ao longo da minha carreira, desenvolvi habilidades em suporte técnico, manutenção de sistemas e agora estou me dedicando ao desenvolvimento de software.
      </p>
      <p>
        Em minha jornada profissional, tive a oportunidade de trabalhar em diversas empresas, desde a Microlins até a Ford e a Halexistar, onde aprendi a importância de oferecer soluções rápidas e eficazes para os desafios diários de TI. Minha transição para o desenvolvimento de software tem sido empolgante, com cursos e certificações em áreas como Java, Front-end, Engenharia de Software, Banco de Dados e mais.
      </p>
      <p>
        Acredito que a tecnologia pode transformar vidas e promover inclusão, especialmente para pessoas com deficiência visual. Meu objetivo é contribuir para o crescimento das empresas desenvolvendo soluções inovadoras e acessíveis. Estou sempre pronto para enfrentar novos desafios e trazer um impacto positivo através da tecnologia.
      </p>

      {/* Botão para voltar à tela principal */}
      <button onClick={handleBackClick} className="btn-voltar">
        Voltar para a tela principal
      </button>
    </div>
  );
};

export default Sobre;
