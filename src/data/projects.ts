
export type ProjectId =
  | 'peladahub'
  | 'ondeta'
  | 'ctMineral'
  | 'promptsManager';

export type ProjectCategory =
  | 'web'
  | 'mobile'
  | 'fullstack'
  | 'iot';

export type ProjectStatus =
  | 'Em desenvolvimento'
  | 'Concluído';

export interface Project {
  id: ProjectId;
  slug: string;
  title: string;
  categoryLabel: string;
  categories: ProjectCategory[];
  description: string;
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  coverImage?: string;
  coverAlt?: string;
  repositoryUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'peladahub',
    slug: 'peladahub',
    title: 'PeladaHub',
    categoryLabel: 'Mobile · Full Stack',
    categories: ['mobile', 'fullstack'],
    description:
      'Aplicativo móvel para gerenciamento de grupos de futebol, reunindo jogadores, treinos, times, partidas, gols e estatísticas em um único lugar.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
    ],
    status: 'Em desenvolvimento',
    featured: true,
    coverImage: '/images/projects/PeladaHub.webp',
    coverAlt: 'Apresentação visual do APP PeladaHub',
  },
  {
    id: 'ondeta',
    slug: 'ondeta',
    title: 'OndeTá',
    categoryLabel: 'Mobile · Full Stack · IoT',
    categories: ['mobile', 'fullstack', 'iot'],
    description:
      'Aplicativo mobile para solicitar e acompanhar serviços urbanos, com mapas, monitoramento de veículos e integração proposta com dispositivos IoT.',
    technologies: [
      'React Native',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'IoT',
    ],
    status: 'Concluído',
    featured: false,
    coverImage: '/images/projects/OndeTa.webp',
    coverAlt: 'Telas do aplicativo OndeTá com solicitações e mapas',
  },
  {
    id: 'ctMineral',
    slug: 'ct-mineral',
    title: 'CT Mineral',
    categoryLabel: 'Web · Full Stack',
    categories: ['web', 'fullstack'],
    description:
      'Sistema web para gerenciar clientes, amostras e processos laboratoriais do CT Mineral, com geração de orçamentos e tratamento de planilhas Excel.',
    technologies: [
      'Vue.js',
      'TypeScript',
      'AdonisJS',
      'PostgreSQL',
      'Python',
    ],
    status: 'Concluído',
    featured: false,
    coverImage: '/images/projects/CTMineral.webp',
    coverAlt: 'Interface do sistema web de gerenciamento do CT Mineral',
  },
  {
    id: 'promptsManager',
    slug: 'prompts-manager',
    title: 'Prompts Manager',
    categoryLabel: 'Web · Frontend',
    categories: ['web'],
    description:
      'Aplicação web para cadastrar, organizar, pesquisar e reutilizar prompts de inteligência artificial, com armazenamento no navegador.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'LocalStorage',
    ],
    status: 'Concluído',
    featured: false,
    repositoryUrl:
      'https://github.com/roberio-junior/prompts-manager',

    coverImage: '/images/projects/prompts.webp',
    coverAlt: 'Apresentação visual do APP PeladaHub',
  },
];
