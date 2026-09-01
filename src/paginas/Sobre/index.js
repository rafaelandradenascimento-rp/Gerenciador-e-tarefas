import './index.css'
import fotoPerfil from './foto-perfil.jpeg';
import habilidadeDesenvolvedor from './foto-desenvolvedor.png';
import habilidadeEletrecista from './foto-eletrecista.jpeg';
import habilidadeMusica from './foto-musica.png';

function Sobre() {
    return (
        <main>            
            <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <div className='boxfotoPerfil'>
                    <img className="imgfotoPerfil" src={fotoPerfil} />
                    <p>Rafael De Andrade</p>
          
                    <a 
                        href="https://www.linkedin.com/in/rafaelflorindo" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="linkedinLink"
                    >
                        LinkedIn
                    </a>
                </div>
                <div className='habilidades'>
                    <article>
                        <h2>Games</h2>
                        <img src={habilidadeDesenvolvedor}/>
                        <p className='descricao'>
                        Gosto de jogar jogos de carro e de futebol como como efootbal e car pixel 
                        </p>
                    </article>
                    <article>
                        <h2>Esportes</h2>
                        <img src={habilidadeEletrecista} />
                        <p className='descricao'>
                        Gosta de esportes como Futebol Basquete e Automoblismo e tenho como inspiração Neymar Jr e Lewis Hamilton. 
                        </p>
                    </article>
                    <article>
                        <h2>Conhecimento Automobilistíco</h2>
                        <img src={habilidadeMusica} />
                        <p className='descricao'>
                        Gosto de carros desde criança e quero e sempre quero aprender mais sobre mecanica automotiva e modelos e tipos de carros como esportivo classico popular e importados.                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Sobre;