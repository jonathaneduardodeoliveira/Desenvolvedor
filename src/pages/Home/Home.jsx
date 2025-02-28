import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Jonathan Eduardo de Oliveira</h1>
        <p>Desenvolvedor Full Stack | React | Java | MySQL | Git | GitHub</p>
        <p><a href="mailto:jonathan.mega2@gmail.com">jonathan.mega2@gmail.com</a></p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/JonathanEduardoDeOliveira/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://github.com/jonathaneduardodeoliveira" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>

      <main>
        <section id="resumo-profissional">
          <h2><Link to="/resumo-profissional">Resumo Profissional</Link></h2>
        </section>

        <section id="sobre">
          <h2><Link to="/sobre">Sobre Mim</Link></h2>
        </section>

        <section id="habilidades">
          <h2><Link to="/habilidades">Habilidades</Link></h2>
        </section>

        <section id="projetos">
          <h2><Link to="/projetos">Projetos</Link></h2>
        </section>

        <section id="contato">
          <h2>Contato</h2>
          <p>Se você está em busca de um desenvolvedor iniciante, mas dedicado e com vontade de aprender, entre em contato comigo!</p>
          <p><a href="mailto:jonathan.mega2@gmail.com">jonathan.mega2@gmail.com</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Jonathan Eduardo de Oliveira. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
