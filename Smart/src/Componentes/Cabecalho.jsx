import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import estilos from './Cabecalho.module.css';

export function Cabecalho() {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);

  return (
    <header className={estilos.header}>
      <div className={estilos.container}>
        <h1>SmartCity</h1>
        <nav className={estilos.navbar}>
          <ul className={estilos.navMenu}>
            <li className={estilos.navItem}>
              <Link to="/inicial/home" className={estilos.navLink}>Home</Link>
            </li>
            <li className={estilos.navItem}>
              <Link to="/inicial/sobre" className={estilos.navLink}>Sobre</Link>
            </li>
            <li className={estilos.navItem}>
              <Link to="/inicial/projeto" className={estilos.navLink}>Projeto</Link>
            </li>
            <li
              className={`${estilos.navItem} ${estilos.dropdown}`}
              onMouseEnter={() => setMostrarDropdown(true)}
              onMouseLeave={() => setMostrarDropdown(false)}
            >
              <span className={estilos.navLink}>Serviços</span>
              {mostrarDropdown && (
                <ul className={estilos.dropdownMenu}>
                  <li><Link to='/inicial/filtro' className={estilos.navLink}>Filtros</Link></li>
                  <li><Link to='/inicial' className={estilos.navLink}>Lista Sensores</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
