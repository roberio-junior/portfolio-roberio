
import {
  Code,
  Smartphone,
  Server,
  Database,
  Cpu,
  Wrench,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

import SectionHeading from '../SectionHeading';

import {
  skillCategories,
  type SkillCategoryId,
} from '../../data/skills';

import styles from './styles.module.css';

const categoryIcons: Record<SkillCategoryId, LucideIcon> = {
  frontend: Code,
  mobile: Smartphone,
  backend: Server,
  data: Database,
  iot: Cpu,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section
      id="tecnologias"
      className={styles.section}
      aria-labelledby="tecnologias-title"
    >
      <div className={styles.container}>
        <div id="tecnologias-title">
          <SectionHeading
            eyebrow="02 / MINHA STACK"
            title="Tecnologias"
            description="Ferramentas e tecnologias que utilizo no desenvolvimento de aplicações web, mobile e outros projetos."
          />
        </div>

        <div className={styles.grid}>
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id];

            return (
              <article
                key={category.id}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <span className={styles.number}>
                    {category.number}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>
                  {category.title}
                </h3>

                <p className={styles.cardDescription}>
                  {category.description}
                </p>

                <ul className={styles.technologies}>
                  {category.technologies.map((technology) => (
                    <li
                      key={technology}
                      className={styles.technology}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className={styles.footer}>
          <span className={styles.footerSymbol} aria-hidden="true">
            ✳
          </span>

          <div>
            <span className={styles.footerLabel}>
              DESENVOLVIMENTO CONTÍNUO
            </span>

            <p>
              Cada projeto é uma oportunidade de aplicar
              conhecimentos, explorar tecnologias e
              aprimorar minhas habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
