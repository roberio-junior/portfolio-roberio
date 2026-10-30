
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
    coverImage: '/images/projects/PeladaHub.png',
    coverAlt: 'Apresentação visual do APP PeladaHub',
  },
  {
    id: 'ondeta',
    slug: 'ondeta',
    title: 'OndeTá',
    categoryLabel: 'Mobile · Full Stack · IoT',
    categories: ['mobile', 'fullstack', 'iot'],
    description:
      'Solução de rastreamento de veículos que integra dispositivos IoT, API, aplicativo mobile e painel web para acompanhamento de frotas.',
    technologies: [
      'ESP32',
      'MQTT',
      'NestJS',
      'PostgreSQL',
      'React Native',
    ],
    status: 'Concluído',
    featured: false, 
    coverImage: '/images/projects/OndeTa.png',
    coverAlt: 'Apresentação visual do APP OndeTá',
  },
  {
    id: 'ctMineral',
    slug: 'ct-mineral',
    title: 'CT Mineral',
    categoryLabel: 'Web · Full Stack',
    categories: ['web', 'fullstack'],
    description:
      'Plataforma web para gerenciamento e acompanhamento dos serviços do CT Mineral do IFRN, com autenticação integrada ao SUAP.',
    technologies: [
      'Vue.js',
      'TypeScript',
      'Supabase',
      'OAuth2',
    ],
    status: 'Concluído',
    featured: false,
    coverImage: '/images/projects/CTMineral.png',
    coverAlt: 'Apresentação visual da plataforma web CT Mineral',
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
  },
];
