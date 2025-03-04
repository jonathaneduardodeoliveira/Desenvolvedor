import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Projetos.css";

const Projetos = () => {
  const [ativo, setAtivo] = useState(null);
  const navigate = useNavigate();

  const alternarSecao = (secao) => {
    setAtivo(ativo === secao ? null : secao);
  };

  const voltarParaPrincipal = () => {
    navigate("/");
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
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/JogoDaVelha" target="_blank" rel="noopener noreferrer">
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
            <p>🔗 <a href="https://github.com/plasmus777/Projeto_Acoes_Adatech" target="_blank" rel="noopener noreferrer">
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
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/CarrosParaODiaDia" target="_blank" rel="noopener noreferrer">
              Ver Projeto no GitHub
            </a></p>

            <h4>AlugaCarrosMS</h4>
            <p>
              Este projeto é uma evolução do <strong>Carros para o Dia a Dia</strong>. Durante o desenvolvimento, 
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
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/AlugaCarrosMS" target="_blank" rel="noopener noreferrer">
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
            <p>🔗 <a href="https://github.com/jonathaneduardodeoliveira/Rh" target="_blank" rel="noopener noreferrer">
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
            <p>Meus projetos React serão adicionados aqui. Será atualizado semanalmente, estou organizando e melhorando os projetos.</p>
          </div>
        )}
      </div>

      <div className="projeto-secao">
        <h3 onClick={() => alternarSecao("web")} className="secao-titulo">
          Projetos Web {ativo === "web" ? "▲" : "▼"}
        </h3>
        {ativo === "web" && (
          <div className="projeto-detalhes">
            <>
            <p>Meus projetos Web serão adicionados aqui. Será atualizado semanalmente, estou organizando e melhorando os projetos.</p>
            <h4>🌤️ Consulta do Tempo</h4>
            <p>
              Esse foi meu primeiro projeto lidando com APIs durante um curso de fundamentos da web. 
              Foi uma experiência muito legal, e eu adorei compartilhar com meus amigos! 😊  
            </p>
            <p>
              🔗 <a href="https://github.com/jonathaneduardodeoliveira/ComoTempoTAHoje" target="_blank">
                Repositório no GitHub
              </a>  
            </p>
            <p>
              🌍 <a href="https://jonathaneduardodeoliveira.github.io/ComoTempoTAHoje/" target="_blank">
                Consulte o tempo hoje para o seu esporte favorito!
              </a>
            </p>

            <h4>💵 Conversor de Dólar</h4>
            <p>
              Esse projeto surgiu de uma conversa em um grupo de investimentos do qual participo. 
              Muitas páginas oferecem consulta do dólar, mas são cheias de informações desnecessárias, 
              dificultando o acesso ao que realmente importa.  
            </p>
            <p>
              Por isso, criei essa ferramenta simples e objetiva para consultar a cotação do dólar 
              e converter para real de forma rápida!  
            </p>
            <p>
              🔗 <a href="https://github.com/jonathaneduardodeoliveira/dolar" target="_blank">
                Repositório no GitHub
              </a>  
            </p>
            <p>
              💰 <a href="https://jonathaneduardodeoliveira.github.io/dolar/" target="_blank">
                Consulte a cotação do dólar e converta para real!
              </a>
            </p>

            <h4>📝 Prova com Acessibilidade</h4>
            <p>
              📚 Esse projeto tem um significado especial para mim! Foi minha primeira apresentação 
              para uma instituição de ensino, com o objetivo de solicitar melhorias na acessibilidade.  
            </p>
            <p>
              A prova original da instituição era totalmente inacessível para usuários de leitores de tela. 
              Então, decidi criar essa versão acessível como exemplo de como a prova poderia ser feita 
              de maneira mais inclusiva. 😊  
            </p>
            <p>
              🔗 <a href="https://github.com/jonathaneduardodeoliveira/Prova" target="_blank">
                Repositório no GitHub
              </a>  
            </p>
            <p>
              ✅ <a href="https://jonathaneduardodeoliveira.github.io/Prova/" target="_blank">
                Faça a prova acessível aqui!
              </a>
            </p>
            </>
          </div>
        )}
      </div>

      <div className="projeto-secao">
        <h3 onClick={() => alternarSecao("fullstack")} className="secao-titulo">
          Projetos Full Stack {ativo === "fullstack" ? "▲" : "▼"}
        </h3>
        {ativo === "fullstack" && (
          <div className="projeto-detalhes">
            <p>Em breve, meus projetos Full Stack estarão aqui. Estou organizando e subindo, será atualizado semanalmente.</p>
            </div>
        )}
      </div>      <button onClick={voltarParaPrincipal}>Voltar para a Tela Principal</button>


    </div>
  );
};

export default Projetos;
