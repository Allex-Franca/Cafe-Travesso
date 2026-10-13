
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-contatos">
        <div className="contato-item">
          <span className="contato-icone">◷</span>
          <div>
            <h3>Horário</h3>
            <p>Terça a domingo, das 7h às 19h</p>
          </div>
        </div>

        <div className="contato-item">
          <span className="contato-icone">⌖</span>
          <div>
            <h3>Endereço</h3>
            <p>Casa do Luan Dias, Florianópolis</p>
          </div>
        </div>

        <div className="contato-item">
          <span className="contato-icone">☎</span>
          <div>
            <h3>Telefone</h3>
            <p>(48) [TELEFONE]</p>
          </div>
        </div>
      </section>

      <div className="footer-final">
        <div className="footer-final-conteudo">
          <h3>Café Travesso</h3>
          <p>
            © 2026 Café Travesso · Projeto fictício
            para fins didáticos
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
