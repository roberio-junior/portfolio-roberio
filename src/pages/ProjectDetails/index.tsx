import { useEffect, useMemo, useState } from 'react';

import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router';

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

import { projects } from '../../data/projects';
import { caseStudies } from '../../data/caseStudies';

import NotFound from '../NotFound';

import styles from './styles.module.css';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();

  const location = useLocation();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const project =
    projectIndex >= 0 ? projects[projectIndex] : undefined;

  const sections = useMemo(
    () => (project ? caseStudies[project.id].sections : []),
    [project]
  );

  const [activeSection, setActiveSection] = useState(
    'visao-geral'
  );

  const previousLocation = (
    location.state as { from?: unknown } | null
  )?.from;

  const backTo =
    typeof previousLocation === 'string' &&
    /^\/projetos(?:\?[^#]*)?$/.test(previousLocation)
      ? previousLocation
      : '/projetos';

  const nextProject = project
    ? projects[(projectIndex + 1) % projects.length]
    : undefined;

  useEffect(() => {
    if (!project) return;

    const elements = sections
      .map((section) =>
        document.getElementById(section.id)
      )
      .filter((element): element is HTMLElement =>
        element !== null
      );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-110px 0px -55% 0px',
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [project, sections]);

  if (!project) {
    return <NotFound />;
  }

  function handleSectionChange(sectionId: string) {
    setActiveSection(sectionId);

    navigate(`${location.pathname}#${sectionId}`, {
      state: { from: backTo },
    });
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link to="/">Início</Link>
          <span>/</span>
          <Link to={backTo}>Projetos</Link>
          <span>/</span>
          <span>{project.title}</span>
        </div>

        <div className={styles.hero}>
          <div className={styles.heroInfo}>
            <span className={styles.eyebrow}>
              ESTUDO DE CASO / {project.categoryLabel}
            </span>

            <h1>{project.title}<span>_</span></h1>

            <p className={styles.summary}>
              {project.description}
            </p>

            <div className={styles.heroMeta}>
              <span className={styles.status}>
                {project.status}
              </span>

              <span>{project.categoryLabel}</span>
            </div>

            <div className={styles.heroActions}>
              <Link to={backTo} className={styles.backButton}>
                <ArrowLeft size={18} />
                Voltar aos projetos
              </Link>

              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.repoButton}
                >
                  Repositório
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>

          <div
            className={`${styles.visual} ${
              styles[project.id]
            }`}
          >
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={
                  project.coverAlt ??
                  `Imagem do projeto ${project.title}`
                }
                className={styles.coverImage}
              />
            ) : (
              <div
                className={styles.visualArtwork}
                aria-hidden="true"
              >
                <span>PROJETO / PORTFÓLIO</span>

                <strong>{project.title}_</strong>

                <span>WEB / MOBILE / TECNOLOGIA</span>
              </div>
            )}
          </div>
        </div>

        <div className={styles.mobileNavigation}>
          <label htmlFor="case-section">
            NAVEGAR PELO PROJETO
          </label>

          <select
            id="case-section"
            value={activeSection}
            onChange={(event) =>
              handleSectionChange(event.target.value)
            }
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <nav aria-label="Seções do estudo de caso">
              <span className={styles.sidebarLabel}>
                NESTA PÁGINA
              </span>

              {sections.map((section, index) => (
                <Link
                  key={section.id}
                  to={`${location.pathname}#${section.id}`}
                  state={{ from: backTo }}
                  className={`${styles.navLink} ${
                    activeSection === section.id
                      ? styles.navLinkActive
                      : ''
                  }`}
                  aria-current={
                    activeSection === section.id
                      ? 'location'
                      : undefined
                  }
                  onClick={() =>
                    setActiveSection(section.id)
                  }
                >
                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {section.title}
                </Link>
              ))}
            </nav>
          </aside>

          <div className={styles.content}>
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={styles.section}
                aria-labelledby={`${section.id}-title`}
              >
                <span className={styles.sectionNumber}>
                  {String(index + 1).padStart(2, '0')}
                  {' / '}
                  {String(sections.length).padStart(2, '0')}
                </span>

                <h2 id={`${section.id}-title`}>
                  {section.title}
                  <span>_</span>
                </h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}

                {section.id === 'tecnologias' && (
                  <ul
                    className={styles.techList}
                    aria-label="Tecnologias do projeto"
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>
                        {technology}
                      </li>
                    ))}
                  </ul>
                )}

                {section.points && (
                  <div className={styles.points}>
                    {section.points.map((point) => (
                      <div
                        key={point.title}
                        className={styles.point}
                      >
                        <h3>{point.title}</h3>
                        <p>{point.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        <div className={styles.bottomNavigation}>
          <Link to={backTo}>
            <ArrowLeft size={18} />
            Todos os projetos
          </Link>

          {nextProject && (
            <Link
              to={`/projetos/${nextProject.slug}`}
              state={{ from: backTo }}
              className={styles.nextProject}
            >
              <span>
                <small>PRÓXIMO PROJETO</small>
                <strong>{nextProject.title}</strong>
              </span>

              <ArrowRight size={23} />
            </Link>
          )}
        </div>

        <div className={styles.contactFooter}>
          <span>GOSTOU DO PROJETO?</span>

          <a href="mailto:roberiojr110@gmail.com">
            Vamos conversar
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
