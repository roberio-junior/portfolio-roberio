
export type SkillCategoryId =
  | 'frontend'
  | 'mobile'
  | 'backend'
  | 'data'
  | 'iot'
  | 'tools';

export interface SkillCategory {
  id: SkillCategoryId;
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend',
    description:
      'Desenvolvimento de interfaces web e experiências interativas.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Vue.js',
      'Vuetify',
    ],
  },
  {
    id: 'mobile',
    number: '02',
    title: 'Mobile',
    description:
      'Desenvolvimento de aplicativos móveis e integração com serviços.',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'React Navigation',
    ],
  },
  {
    id: 'backend',
    number: '03',
    title: 'Backend e APIs',
    description:
      'Construção de serviços, regras de negócio e comunicação entre sistemas.',
    technologies: [
      'Node.js',
      'NestJS',
      'AdonisJS',
      'TypeScript',
      'Python',
      'APIs REST',
    ],
  },
  {
    id: 'data',
    number: '04',
    title: 'Dados e autenticação',
    description:
      'Persistência de informações, bancos de dados e autenticação.',
    technologies: [
      'PostgreSQL',
      'SQLite',
      'MySQL',
      'Supabase',
      'Firebase Auth',
    ],
  },
  {
    id: 'iot',
    number: '05',
    title: 'Sistemas embarcados e IoT',
    description:
      'Integração entre dispositivos, sensores e sistemas de software.',
    technologies: [
      'ESP32',
      'C/C++',
      'MQTT',
      'GPS',
      'Raspberry Pi Pico',
    ],
  },
  {
    id: 'tools',
    number: '06',
    title: 'Ferramentas',
    description:
      'Versionamento, ambientes de desenvolvimento e infraestrutura.',
    technologies: [
      'Git',
      'GitHub',
      'Docker',
      'Linux',
      'VS Code',
    ],
  },
];
