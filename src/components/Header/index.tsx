
import { useEffect, useState } from 'react';

import { Link } from 'react-router';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import styles from './styles.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen ? 'Fechar menu' : 'Abrir menu'
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`${styles.navigation} ${
            menuOpen ? styles.navigationOpen : ''
          }`}
        >
          <Link to="/#inicio" onClick={closeMenu}>
            Início
          </Link>

          <Link to="/#sobre" onClick={closeMenu}>
            Sobre
          </Link>

          <Link to="/#tecnologias" onClick={closeMenu}>
            Tecnologias
          </Link>

          <Link to="/#projetos" onClick={closeMenu}>
            Destaques
          </Link>

          <Link to="/projetos" onClick={closeMenu}>
            Projetos
          </Link>

          <a
            href="https://github.com/roberio-junior"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>

          <a
            href="mailto:roberiojr110@gmail.com"
            className={styles.contactButton}
            onClick={closeMenu}
          >
            Contato <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}
