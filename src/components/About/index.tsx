
import { Layers2 } from 'lucide-react';

import SectionHeading from '../SectionHeading';

import styles from './styles.module.css';

const summary = [
  {
    label: 'FORMAÇÃO TÉCNICA',
    title: 'Manutenção e Suporte em Informática',
    description: 'IFRN · Concluído',
  },
  {
    label: 'GRADUAÇÃO',
    title: 'Tecnologia em Sistemas para Internet',
    description: 'IFRN · Em andamento',
  },
  {
    label: 'ÁREA DE ATUAÇÃO',
    title: 'Web & Mobile',
    description: 'Interfaces, APIs e bancos de dados',
  },
  {
    label: 'PROPÓSITO',
    title: 'Soluções para necessidades reais',
    description: 'Projetos acadêmicos e pessoais',
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className={styles.section}
      aria-labelledby="sobre-title"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div id="sobre-title">
            <SectionHeading
              eyebrow="01 / QUEM SOU"
              title="Sobre mim"
            />
          </div>

          <div className={styles.text}>
            <p>
              Minha trajetória na tecnologia começou no
              IFRN, onde concluí o curso Técnico Integrado
              em Manutenção e Suporte em Informática.
              Atualmente, curso Tecnologia em Sistemas
              para Internet na mesma instituição,
              aprofundando meus conhecimentos em
              desenvolvimento de software.
            </p>

            <p>
              Ao longo da minha formação, desenvolvi
              projetos acadêmicos e pessoais que me
              permitiram colocar em prática conhecimentos
              de desenvolvimento web e mobile. Essas
              experiências contribuíram para o
              aprimoramento das minhas habilidades e
              ampliaram meu interesse pela construção
              de soluções que atendam a necessidades
              reais.
            </p>
          </div>

          <div className={styles.signature}>
            <span className={styles.signatureLine} />
            <span>
              DESENVOLVIMENTO WEB & MOBILE
            </span>
          </div>
        </div>

        <aside
          className={styles.summaryPanel}
          aria-label="Resumo profissional"
        >
          <div className={styles.panelHeader}>
            <span>PERFIL EM RESUMO</span>
            <Layers2 size={22} aria-hidden="true" />
          </div>

          <div className={styles.summaryGrid}>
            {summary.map((item) => (
              <article
                key={item.label}
                className={styles.summaryItem}
              >
                <span className={styles.itemLabel}>
                  {item.label}
                </span>

                <h3 className={styles.itemTitle}>
                  {item.title}
                </h3>

                <p className={styles.itemDescription}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
