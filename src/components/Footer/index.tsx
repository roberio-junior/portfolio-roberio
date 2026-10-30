
import { ArrowUpRight } from 'lucide-react';

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
        <small className={styles.copyright}>
          © {new Date().getFullYear()} Robério Júnior.
        </small>

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
    </footer>
  );
}
