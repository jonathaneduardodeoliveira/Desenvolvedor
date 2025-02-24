import React, { useState } from "react";
import "./Projetos.css";

const Projetos = () => {
  const [ativo, setAtivo] = useState(null);

  const alternarSecao = (secao) => {
    setAtivo(ativo === secao ? null : secao);
  };

  return (
    <div className="projetos-container">
      <h2>Projetos</h2>

      <div className="projeto-secao">
        <h3 onClick={() => alternarSecao("java")} className="secao-titulo">
          Projetos em Java {ativo === "java" ? "▲" : "▼"}
        </h3>
        {ativo === "java" && (
          <div className="projeto-detalhes">
            <h4>Jogo da Velha</h4>
            <p>
              Meu primeiro código em Java! Desenvolvido como um desafio no curso, 
              joguei com amigos e professores durante a aula. Foi uma experiência 
              incrível ver meu código funcionando e sendo escolhido para jogarmos juntos. 
              Cada novo projeto me fascina, principalmente depois de superar desafios e erros.
            </p>
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/JogoDaVelha" target="_blank">
              Ver Projeto no GitHub
            </a></p>

            <h4>Projeto Ações AdaTech</h4>
            <p>
              O Projeto Ações AdaTech é uma aplicação Java com Spring Boot que 
              facilita o gerenciamento de investimentos, como ações, fundos 
              imobiliários e renda fixa. O sistema permite cadastrar ativos 
              financeiros e configurar alertas de preço personalizados para 
              compra e venda. A ferramenta também oferece notificações automáticas 
              por e-mail e relatórios diários para análise de desempenho. 
              Ideal para investidores que desejam monitorar suas carteiras e 
              tomar decisões estratégicas.
            </p>
            <p>🔗 <a href="https://github.com/plasmus777/Projeto_Acoes_Adatech" target="_blank">
              Ver Projeto no GitHub
            </a></p>

            <h4>Carros para o Dia a Dia</h4>
            <p>
              Um serviço de backend em Java que facilita o aluguel de carros para o dia a dia. 
              Com Spring Boot e MySQL, permite que usuários localizem e aluguem veículos de forma eficiente, 
              enquanto administradores podem cadastrar, gerenciar e remover carros disponíveis. 
              Este é um projeto em desenvolvimento, trazendo uma solução prática para mobilidade urbana. 
              Um belo projeto Java que continua evoluindo! 🚗💨
            </p>
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/CarrosParaODiaDia" target="_blank">
              Ver Projeto no GitHub
            </a></p>

            <h4>AlugaCarrosMS</h4>
            <p>
              Este projeto é uma evolução do **Carros para o Dia a Dia**. Durante o desenvolvimento, 
              percebi como a abordagem de microsserviços torna o sistema mais organizado, modular e eficiente. 
              Então, decidi dividir o projeto original em microsserviços para praticar essa arquitetura.  
            </p>
            <p>
              Agora estou desenvolvendo os dois sistemas com abordagens diferentes:
            </p>
            <ul>
              <li><strong>Carros para o Dia a Dia:</strong> Sistema monolítico (arquitetura horizontal), onde todos os serviços estão juntos.</li>
              <li><strong>AlugaCarrosMS:</strong> Sistema baseado em microsserviços (arquitetura vertical), onde cada funcionalidade é independente e escalável.</li>
            </ul>
            <p>
              Essa prática me permite entender melhor as vantagens e desafios de cada abordagem, tornando-me um programador mais versátil! 🚀
            </p>
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/AlugaCarrosMS" target="_blank">
              Ver Projeto no GitHub
            </a></p>

            <h4>Sistema de RH com Microsserviços</h4>
            <p>
              Um sistema de Recursos Humanos desenvolvido com microsserviços em Java, Spring Boot e MySQL. 
              Esse projeto permitirá gerenciar colaboradores, incluindo cadastro de novos funcionários, 
              promoções, mudanças de setor e desligamentos. Com arquitetura modular e escalável, 
              o sistema está sendo desenvolvido para oferecer uma solução eficiente para empresas 
              que precisam de um RH digitalizado e ágil. 🚀
            </p>
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/Rh" target="_blank">
              Ver Projeto no GitHub
            </a></p>
          </div>
        )}
      </div>

      <div className="projeto-secao">
        <h3 onClick={() => alternarSecao("react")} className="secao-titulo">
          Projetos em React {ativo === "react" ? "▲" : "▼"}
        </h3>
        {ativo === "react" && (
          <div className="projeto-detalhes">
            <p>Projetos desenvolvidos utilizando React.</p>
          </div>
        )}
      </div>

      <div className="projeto-secao">
        <h3 onClick={() => alternarSecao("web")} className="secao-titulo">
          Projetos Web {ativo === "web" ? "▲" : "▼"}
        </h3>
        {ativo === "web" && (
          <div className="projeto-detalhes">
            <p>Projetos desenvolvidos com HTML, CSS e JavaScript.</p>
          </div>
        )}
      </div>

      <div className="projeto-secao">
        <h3 onClick={() => alternarSecao("fullstack")} className="secao-titulo">
          Projetos Full Stack {ativo === "fullstack" ? "▲" : "▼"}
        </h3>
        {ativo === "fullstack" && (
          <div className="projeto-detalhes">
            <p>Aqui você pode adicionar projetos Full Stack no futuro.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projetos;
