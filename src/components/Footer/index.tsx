
import { Link } from 'react-router';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

import styles from './styles.module.css';

const contacts = [
  {
    label: 'GitHub',
    url: 'https://github.com/roberio-junior',
  },
  {
    label: 'LinkedIn',
    url: 'https://br.linkedin.com/in/roberio-junior',
  },
  {
    label: 'E-mail',
    url: 'mailto:roberiojr110@gmail.com',
  },
];

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.identity}>
            <Link to="/#inicio" className={styles.logo}>
              ROBÉRIO<span>_</span>
            </Link>

            <p>Desenvolvedor Web & Mobile</p>
          </div>

          <nav
            className={styles.contacts}
            aria-label="Redes profissionais e contato"
          >
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.url}
                target={
                  contact.url.startsWith('mailto:')
                    ? undefined
                    : '_blank'
                }
                rel={
                  contact.url.startsWith('mailto:')
                    ? undefined
                    : 'noopener noreferrer'
                }
              >
                {contact.label}
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <small>
            © {new Date().getFullYear()} Robério Júnior.
          </small>

          <Link to="/#inicio" className={styles.backToTop}>
            Voltar ao topo
            <ArrowUp size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
