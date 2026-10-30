
import { Link } from 'react-router';

import {
  ArrowUpRight,
  Code2,
  MapPin,
  Monitor,
  Smartphone,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

import SectionHeading from '../SectionHeading';

import {
  projects,
  type Project,
  type ProjectId,
} from '../../data/projects';

import styles from './styles.module.css';

const projectIcons: Record<ProjectId, LucideIcon> = {
  peladahub: Smartphone,
  ondeta: MapPin,
  ctMineral: Monitor,
  promptsManager: Code2,
};

// Mantém a ordem cadastrada, sem priorizar
// nenhum projeto pelo campo featured.
const selectedProjects = projects.filter(
  (project) => project.id !== 'promptsManager'
);

interface HomeProjectCardProps {
  project: Project;
  position: number;
}

function HomeProjectCard({
  project,
  position,
}: HomeProjectCardProps) {
  const Icon = projectIcons[project.id];

  const isInDevelopment =
    project.status === 'Em desenvolvimento';

  return (
    <Link
      to={`/projetos/${project.slug}`}
      className={styles.card}
      aria-label={`Ver estudo de caso do projeto ${project.title}`}
    >
      <div
        className={`${styles.cover} ${
          styles[project.id]
        }`}
      >
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={
              project.coverAlt ??
              `Apresentação visual do projeto ${project.title}`
            }
            className={styles.coverImage}
            loading="lazy"
          />
        ) : (
          <div
            className={styles.artwork}
            aria-hidden="true"
          >
            <span className={styles.artworkIndex}>
              PROJETO / {String(position + 1).padStart(2, '0')}
            </span>

            <div className={styles.artworkSymbol}>
              <Icon size={64} strokeWidth={1.4} />
            </div>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <span className={styles.category}>
            {project.categoryLabel}
          </span>

          <span
            className={`${styles.status} ${
              isInDevelopment
                ? styles.inDevelopment
                : styles.completed
            }`}
          >
            {project.status}
          </span>
        </div>

        <h3 className={styles.cardTitle}>
          {project.title}
        </h3>

        <p className={styles.description}>
          {project.description}
        </p>

        <ul
          className={styles.technologies}
          aria-label="Principais tecnologias"
        >
          {project.technologies
            .slice(0, 3)
            .map((technology) => (
              <li
                key={technology}
                className={styles.technology}
              >
                {technology}
              </li>
            ))}
        </ul>

        <div className={styles.cardFooter}>
          <span className={styles.repositoryLink}>
            Explorar estudo de caso
            <ArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section
      id="projetos"
      className={styles.section}
      aria-label="Projetos em destaque"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.headingContent}>
            <SectionHeading
              eyebrow="03 / TRABALHOS SELECIONADOS"
              title="Projetos em destaque"
              description="Uma seleção de projetos que desenvolvi nas áreas de desenvolvimento web, mobile e IoT."
            />
          </div>

          <Link
            to="/projetos"
            className={styles.catalogLink}
          >
            Ver todos os projetos
            <ArrowUpRight
              size={18}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className={styles.grid}>
          {selectedProjects.map((project, index) => (
            <HomeProjectCard
              key={project.id}
              project={project}
              position={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
