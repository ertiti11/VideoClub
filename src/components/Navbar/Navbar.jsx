import './Navbar.css'; // Importa el archivo de estilos para el Navbar
import { useState } from 'react';
import logo from './rickmortylogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú desplegable

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </div>
        <div className={`menu-container ${isOpen ? 'open' : ''}`}>
          <ul className="menu">
            <li className="menu-item">Temporada 1</li>
            <li className="menu-item">Temporada 2</li>
            <li className="menu-item">Temporada 3</li>
            {/* Agrega más temporadas según sea necesario */}
          </ul>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <button className="search-button">Buscar</button>
        </div>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
