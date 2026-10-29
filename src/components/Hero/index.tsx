
import { ArrowUpRight, Mail } from 'lucide-react';

import styles from './styles.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>

          <h1 className={styles.title}>
            Olá, eu sou
            <span>Robério Júnior!</span>
          </h1>

          <h2 className={styles.subtitle}>
            Desenvolvedor Web & Mobile
          </h2>

          <p className={styles.description}>
            Sou estudante de Tecnologia em Sistemas para Internet no IFRN, com experiência no desenvolvimento de aplicações web e mobile. Meu foco está na criação de interfaces funcionais e na integração entre aplicações, APIs e bancos de dados.
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
          <img
            src="/images/retrato.png"
            alt="Retrato de Robério Júnior com elementos gráficos de programação"
            className={styles.posterArtwork}
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
