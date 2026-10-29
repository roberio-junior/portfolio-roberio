
import { ArrowUpRight, Mail } from 'lucide-react';

import styles from './styles.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            PORTFÓLIO / DESENVOLVIMENTO
          </span>

          <h1 className={styles.title}>
            Olá, eu sou
            <span>Robério!</span>
          </h1>

          <h2 className={styles.subtitle}>
            Desenvolvedor Web & Mobile
          </h2>

          <p className={styles.description}>
            Sou estudante de Tecnologia em Sistemas para
            Internet no IFRN, com experiência prática no
            desenvolvimento de aplicações web e mobile,
            integração de APIs e uso de bancos de dados.
          </p>

          <div className={styles.actions}>
            <a
              href="#projetos"
              className={styles.primaryButton}
            >
              Ver projetos
              <ArrowUpRight size={18} />
            </a>

            <a
              href="mailto:roberiojr110@gmail.com"
              className={styles.secondaryButton}
            >
              <Mail size={18} />
              Entrar em contato
            </a>
          </div>
        </div>

        <div className={styles.poster}>
          <div className={styles.gridPattern} />
          <div className={styles.blueShape} />

          <div className={styles.photoFrame}>
            <img
              src="/images/roberio.png"
              alt="Retrato de Robério Júnior"
              className={styles.photo}
            />
          </div>

          <span
            className={styles.posterTop}
            aria-hidden="true"
          >
            WEB / MOBILE / DEV
          </span>
        </div>
      </div>
    </section>
  );
}
