
import { Link, useSearchParams } from 'react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import ProjectCard from '../../components/ProjectCard';
import SectionHeading from '../../components/SectionHeading';

import {
  projects,
  type ProjectCategory,
} from '../../data/projects';

import styles from './styles.module.css';

type FilterId = 'todos' | ProjectCategory;

interface ProjectFilter {
  id: FilterId;
  label: string;
}

const filters: ProjectFilter[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'iot', label: 'IoT' },
];

export default function ProjectsCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('categoria');

  const activeFilter: FilterId =
    filters.find((filter) => filter.id === categoryParam)
      ?.id ?? 'todos';

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'todos') {
      return true;
    }

    return project.categories.includes(activeFilter);
  });

  function handleFilterChange(filter: FilterId) {
    if (filter === 'todos') {
      setSearchParams({});
      return;
    }

    setSearchParams({ categoria: filter });
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/#projetos" className={styles.backLink}>
          <ArrowLeft size={18} />
          Voltar aos destaques
        </Link>

        <div className={styles.heading}>
          <SectionHeading
            eyebrow="PORTFÓLIO / PROJETOS"
            title="Todos os projetos"
            description="Explore os projetos que desenvolvi nas áreas de desenvolvimento web, mobile, backend e sistemas embarcados."
          />

          <div className={styles.decorativeSymbol}>
            ✳
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterHeader}>
            <span>FILTRAR POR CATEGORIA</span>

            <span className={styles.count} role="status">
              {filteredProjects.length}{' '}
              {filteredProjects.length === 1
                ? 'PROJETO'
                : 'PROJETOS'}
            </span>
          </div>

          <div
            className={styles.filters}
            role="group"
            aria-label="Filtrar projetos por categoria"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => handleFilterChange(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`${styles.filterButton} ${
                  activeFilter === filter.id
                    ? styles.activeFilter
                    : ''
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={false}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>Nenhum projeto encontrado.</h2>
            <p>
              Não existem projetos cadastrados
              nessa categoria.
            </p>
            <button
              type="button"
              onClick={() => handleFilterChange('todos')}
            >
              Ver todos os projetos
            </button>
          </div>
        )}

        <div className={styles.bottomBanner}>
          <div>
            <span className={styles.bannerLabel}>
              CONTINUA EM EVOLUÇÃO
            </span>

            <p>
              Novos projetos poderão ser adicionados
              conforme minha trajetória profissional
              e acadêmica avançar.
            </p>
          </div>

          <ArrowUpRight size={28} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
