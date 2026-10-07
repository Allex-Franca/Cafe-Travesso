import "./Header.css";
import Logo from '../../assets/img/Charles.png'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src={Logo}
            alt="Logo"
          />
          <span className="logo-text">Café Travesso</span>
        </div>
        <nav className="nav">
          <a href="#" className="btn-inicio">
            Início
          </a>
          <a href="#">Catálogo</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;