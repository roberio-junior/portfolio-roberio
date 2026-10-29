
import SectionHeading from '../SectionHeading';

import styles from './styles.module.css';

const trajectory = [
  {
    number: '01',
    category: 'FORMAÇÃO TÉCNICA',
    title: 'Manutenção e Suporte em Informática',
    description: 'IFRN · Curso técnico integrado',
  },
  {
    number: '02',
    category: 'GRADUAÇÃO',
    title: 'Tecnologia em Sistemas para Internet',
    description: 'IFRN · Em andamento',
  },
  {
    number: '03',
    category: 'DESENVOLVIMENTO',
    title: 'Projetos Web e Mobile',
    description: 'Aplicações, APIs e bancos de dados',
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
          className={styles.trajectoryCard}
          aria-label="Resumo da trajetória acadêmica e técnica"
        >
          <div className={styles.cardHeader}>
            <span>TRAJETÓRIA_</span>
            <span className={styles.cardSymbol}>
              ✳
            </span>
          </div>

          <div className={styles.timeline}>
            {trajectory.map((item) => (
              <div
                key={item.number}
                className={styles.timelineItem}
              >
                <span className={styles.number}>
                  {item.number}
                </span>

                <div className={styles.itemContent}>
                  <span className={styles.category}>
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cardFooter}>
            <span>IFRN / TECNOLOGIA</span>
            <span>↗</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
