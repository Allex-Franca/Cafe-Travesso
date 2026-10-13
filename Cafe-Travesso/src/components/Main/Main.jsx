import "./Main.css";
import cafe from '../../assets/img/Cafe_travesso.png'
import Logo from '../../assets/img/Charles.png'
import Logo2 from '../../assets/img/Julian_loki.png'
import Logo3 from '../../assets/img/Ryunsei_shidou.png'

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-conteudo">
          <p className="hero-local">
            CASA DO LUAN DIAS · FLORIANÓPOLIS
          </p>

          <h1>Café travesso, para termos energia para as travessuras</h1>

          <p className="hero-descricao">
            Cafés especiais,preparados com carinho para tornar seu mais agitado.
          </p>

          <div className="hero-botoes">
            <button className="botao-principal">
              Ver cardápio
            </button>

            <button className="botao-secundario">
              Fale com a gente
            </button>
          </div>
        </div>

        <div className="hero-imagem">
          <img src={cafe} alt="Logo"/>
        </div>
      </section>

      <section className="mais-pedidos">
        <div className="pedidos-cabecalho">
          <div>
            <h2>Mais pedidos</h2>
            <p>Os favoritos de quem passa por aqui.</p>
          </div>

          <button className="link-cardapio">
            Ver cardápio completo →
          </button>
        </div>

        <div className="produtos">
          <section className="produto-card">
            <div className="produto-imagem">
              <img src={Logo} alt="Logo"/>
            </div>

            <div className="produto-info">
              <span className="produto-categoria">
                Bebidas
              </span>
              <h3>Chevalatte</h3>
              <p>
                Um espresso de inspiração francesa, sofisticado,travesso e imprevisível, feito para quem aprecia um café com personalidade.
              </p>
              <strong>R$ 14,67</strong>
            </div>
          </section>

          <section className="produto-card">
            <div className="produto-imagem">
              <img src={Logo2} alt="Logo"/>
            </div>

            <div className="produto-info">
              <span className="produto-categoria">
                Bebidas
              </span>
              <h3>Juliano Caféki</h3>
              <p>
                Um latte suave, equilibrado e servido com agilidade. A combinação perfeita entre delicadeza e velocidade..
              </p>
              <strong>R$ 12,50</strong>
            </div>
          </section>

          <section className="produto-card">
            <div className="produto-imagem">
              <img src={Logo3} alt="Logo"/>
            </div>

            <div className="produto-info">
              <span className="produto-categoria">
                Bebidas
              </span>
              <h3>Shidouccino</h3>
              <p>
                Um cappuccino intenso e cheio de personalidade, com uma espuma cremosa que explode em sabor a cada gole.
              </p>
              <strong>R$ 15.55</strong>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Main;
