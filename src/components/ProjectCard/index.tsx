
import { ArrowUpRight } from 'lucide-react';

import type { Project } from '../../data/projects';

import styles from './styles.module.css';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

export default function ProjectCard({
  project,
  isFeatured = project.featured,
}: ProjectCardProps) {
  return (
    <article
      className={`${styles.card} ${
        isFeatured ? styles.featured : ''
      }`}
    >
      <div
        className={`${styles.cover} ${styles[project.id]}`}
      >
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={
              project.coverAlt ??
              `Captura do projeto ${project.title}`
            }
            className={styles.coverImage}
            loading="lazy"
          />
        ) : (
          <div
            className={styles.posterArtwork}
            aria-hidden="true"
          >
            <div className={styles.posterGrid} />

            <span className={styles.posterTop}>
              PROJETO / {project.categoryLabel.toUpperCase()}
            </span>

            <span className={styles.posterCircle} />

            <strong className={styles.posterTitle}>
              {project.title}
              <span>_</span>
            </strong>

            <span className={styles.posterBottom}>
              DESENVOLVIMENTO / PORTFÓLIO
            </span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>
            {project.categoryLabel}
          </span>

          <span
            className={`${styles.status} ${
              project.status === 'Em desenvolvimento'
                ? styles.inDevelopment
                : styles.completed
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className={styles.title}>
          {project.title}
        </h3>

        <p className={styles.description}>
          {project.description}
        </p>

        <ul
          className={styles.technologies}
          aria-label="Tecnologias utilizadas"
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className={styles.technology}
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repositoryLink}
            >
              Ver código público
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className={styles.comingSoon}>
              Estudo de caso em breve
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
