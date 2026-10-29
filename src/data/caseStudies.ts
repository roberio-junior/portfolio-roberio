
import type { ProjectId } from './projects';

export interface CaseStudyPoint {
  title: string;
  description: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  paragraphs: string[];
  points?: CaseStudyPoint[];
}

export interface CaseStudy {
  sections: CaseStudySection[];
}

export const caseStudies: Record<ProjectId, CaseStudy> = {
  peladahub: {
    sections: [
      {
        id: 'visao-geral',
        title: 'Visão geral',
        paragraphs: [
          'O PeladaHub é um aplicativo móvel que estou desenvolvendo para facilitar o gerenciamento de grupos de futebol. A ideia surgiu a partir das dificuldades que observei na organização dos treinos, principalmente quando os responsáveis utilizavam cadernos para registrar as informações.',
          'O aplicativo reúne funcionalidades para gerenciar jogadores e treinos, formar times, registrar partidas, gols e resultados, além de acompanhar históricos e estatísticas. O projeto é voltado principalmente para os responsáveis pela organização dos grupos.',
        ],
      },
      {
        id: 'problema',
        title: 'Problema identificado',
        paragraphs: [
          'Durante os treinos de futebol que acompanhei, observei que os responsáveis utilizavam cadernos para registrar informações sobre jogadores, partidas e resultados. Embora esse método permitisse manter um controle básico, também apresentava dificuldades para organizar e consultar os registros.',
          'Em algumas situações, surgiam dúvidas sobre as informações anotadas, especialmente quando era necessário conferir resultados anteriores ou verificar os gols marcados pelos jogadores.',
        ],
      },
      {
        id: 'solucao',
        title: 'Solução desenvolvida',
        paragraphs: [
          'Para enfrentar essas dificuldades, venho desenvolvendo o PeladaHub, um aplicativo móvel que centraliza as informações utilizadas na organização dos grupos de futebol.',
          'Os registros ficam disponíveis para consultas posteriores, permitindo acompanhar o histórico dos treinos e as estatísticas dos jogadores. Com isso, o aplicativo busca simplificar o registro e a consulta das informações.',
        ],
      },
      {
        id: 'funcionalidades',
        title: 'Funcionalidades',
        paragraphs: [
          'O PeladaHub reúne recursos para acompanhar diferentes etapas da organização dos grupos, desde o cadastro dos jogadores até os resultados das partidas.',
        ],
        points: [
          {
            title: 'Grupos e jogadores',
            description:
              'Cadastro e configuração de grupos, gerenciamento de jogadores, níveis e situações ativa ou inativa.',
          },
          {
            title: 'Treinos e formação de times',
            description:
              'Seleção de participantes e formação de times de maneira balanceada, aleatória ou manual.',
          },
          {
            title: 'Modalidades de treino',
            description:
              'Livre, Jogo único, Mata-mata, Pontos corridos, Grupos + Mata-mata e Rei da quadra.',
          },
          {
            title: 'Partidas e gols',
            description:
              'Acompanhamento do tempo, registro de resultados, gols e identificação dos autores.',
          },
          {
            title: 'Histórico e estatísticas',
            description:
              'Consulta de treinos, partidas, resultados, classificações e artilheiros.',
          },
        ],
      },
      {
        id: 'tecnologias',
        title: 'Tecnologias utilizadas',
        paragraphs: [
          'O aplicativo é desenvolvido com React Native, Expo e TypeScript. O backend utiliza NestJS e PostgreSQL, enquanto o Firebase Authentication é utilizado para autenticar usuários.',
          'O SQLite permite armazenar informações localmente. A integração e a sincronização entre o aplicativo e a API continuam em desenvolvimento.',
        ],
      },
      {
        id: 'desafios',
        title: 'Desenvolvimento e desafios',
        paragraphs: [
          'Um dos desafios foi implementar a formação dos times, considerando os níveis dos participantes e a distribuição de goleiros. Outro ponto importante foi desenvolver as regras das diferentes modalidades de treino.',
          'Com a evolução do projeto, também foi necessário organizar a persistência local, a autenticação e a integração com o backend, incluindo o controle das operações que precisam ser sincronizadas.',
        ],
      },
      {
        id: 'evolucao',
        title: 'Estado atual e evolução',
        paragraphs: [
          'O núcleo de gerenciamento de grupos, jogadores, treinos e partidas já foi desenvolvido. Atualmente, o projeto passa por melhorias na integração com a API e nos mecanismos de sincronização.',
          'Entre as funcionalidades planejadas estão o agendamento de treinos, a confirmação de presença, a fila de suplência e a participação dos jogadores em grupos por meio de contas de usuário.',
        ],
      },
    ],
  },

  ondeta: {
    sections: [
      {
        id: 'visao-geral',
        title: 'Visão geral',
        paragraphs: [
          'O OndeTá é um projeto de rastreamento de veículos que integra sistemas embarcados, backend, aplicativo móvel e uma interface web.',
          'A proposta foi reunir diferentes tecnologias para permitir a coleta, a transmissão e a visualização de informações de localização.',
        ],
      },
      {
        id: 'problema',
        title: 'Problema identificado',
        paragraphs: [
          'O acompanhamento de veículos exige a comunicação entre dispositivos de rastreamento e aplicações que permitam consultar as informações recebidas.',
          'O desafio do projeto foi construir essa integração, conectando hardware, comunicação de dados e interfaces de acompanhamento.',
        ],
      },
      {
        id: 'solucao',
        title: 'Solução desenvolvida',
        paragraphs: [
          'O projeto utiliza um dispositivo com ESP32, módulo GPS e comunicação móvel para obter e transmitir informações de localização.',
          'Esses dados são processados por uma API e disponibilizados para consulta em aplicações mobile e web.',
        ],
      },
      {
        id: 'funcionalidades',
        title: 'Funcionalidades',
        paragraphs: [
          'A solução foi organizada para integrar a coleta de localização e seu acompanhamento por meio de interfaces digitais.',
        ],
        points: [
          {
            title: 'Rastreamento',
            description:
              'Obtenção de informações de localização por meio de dispositivo embarcado.',
          },
          {
            title: 'Comunicação',
            description:
              'Transmissão de dados entre o dispositivo e os serviços do sistema.',
          },
          {
            title: 'Visualização',
            description:
              'Acompanhamento das informações por aplicativo móvel e painel web.',
          },
        ],
      },
      {
        id: 'tecnologias',
        title: 'Tecnologias utilizadas',
        paragraphs: [
          'O projeto envolve ESP32, GPS, comunicação MQTT, NestJS, PostgreSQL e React Native.',
          'A integração dessas tecnologias permite conectar o dispositivo físico aos serviços e interfaces de consulta.',
        ],
      },
      {
        id: 'desafios',
        title: 'Desenvolvimento e desafios',
        paragraphs: [
          'Um dos principais desafios foi integrar diferentes camadas: dispositivo embarcado, transmissão das informações, API, persistência e interfaces de acompanhamento.',
          'O projeto proporcionou experiência prática no desenvolvimento de uma solução que combina IoT, backend e aplicações para usuários.',
        ],
      },
    ],
  },

  ctMineral: {
    sections: [
      {
        id: 'visao-geral',
        title: 'Visão geral',
        paragraphs: [
          'O CT Mineral é uma plataforma web desenvolvida para apoiar o gerenciamento dos serviços do Centro de Tecnologia Mineral do IFRN.',
          'O sistema reúne funcionalidades relacionadas à organização dos serviços, autenticação de usuários e controle de acesso.',
        ],
      },
      {
        id: 'problema',
        title: 'Problema identificado',
        paragraphs: [
          'O gerenciamento de serviços exige uma organização que facilite o acompanhamento das informações e o acesso às operações por diferentes usuários.',
          'O projeto buscou atender essa necessidade por meio de uma aplicação web.',
        ],
      },
      {
        id: 'solucao',
        title: 'Solução desenvolvida',
        paragraphs: [
          'Foi desenvolvida uma plataforma com interface web e integração com serviços de backend e armazenamento de dados.',
          'A autenticação integrada ao SUAP permite utilizar a identidade institucional, enquanto o controle de acesso diferencia as operações disponíveis aos usuários.',
        ],
      },
      {
        id: 'funcionalidades',
        title: 'Funcionalidades',
        paragraphs: [
          'A plataforma concentra recursos voltados à administração e ao acompanhamento de serviços.',
        ],
        points: [
          {
            title: 'Gestão de serviços',
            description:
              'Organização e acompanhamento das informações relacionadas aos serviços.',
          },
          {
            title: 'Autenticação institucional',
            description:
              'Integração de autenticação com o SUAP.',
          },
          {
            title: 'Controle de acesso',
            description:
              'Permissões de uso de acordo com as responsabilidades dos usuários.',
          },
        ],
      },
      {
        id: 'tecnologias',
        title: 'Tecnologias utilizadas',
        paragraphs: [
          'O desenvolvimento envolveu Vue.js e TypeScript na aplicação web, além de Supabase e mecanismos de autenticação OAuth2.',
          'As tecnologias foram utilizadas para construir a interface, integrar serviços e gerenciar o acesso às informações.',
        ],
      },
      {
        id: 'desafios',
        title: 'Desenvolvimento e desafios',
        paragraphs: [
          'Entre os aspectos técnicos do projeto estão a integração com serviços institucionais, a autenticação e a definição de permissões.',
          'A experiência contribuiu para o desenvolvimento de aplicações web com diferentes responsabilidades de acesso e integração de sistemas.',
        ],
      },
    ],
  },

  promptsManager: {
    sections: [
      {
        id: 'visao-geral',
        title: 'Visão geral',
        paragraphs: [
          'O Prompts Manager é uma aplicação web criada para organizar prompts de inteligência artificial em um único lugar.',
          'O projeto foi desenvolvido durante uma jornada da Rocketseat, utilizando como referência visual um layout disponibilizado no Figma.',
        ],
      },
      {
        id: 'problema',
        title: 'Problema identificado',
        paragraphs: [
          'Manter prompts distribuídos em diferentes anotações e arquivos dificulta sua localização e reutilização.',
          'A proposta foi desenvolver uma interface simples para cadastrar, encontrar e organizar esses conteúdos.',
        ],
      },
      {
        id: 'solucao',
        title: 'Solução desenvolvida',
        paragraphs: [
          'Foi criada uma aplicação executada no navegador, sem necessidade de backend, utilizando LocalStorage para persistir as informações.',
          'O projeto prioriza uma interface acessível, responsiva e de uso direto.',
        ],
      },
      {
        id: 'funcionalidades',
        title: 'Funcionalidades',
        paragraphs: [
          'A aplicação disponibiliza as operações essenciais para organizar uma coleção pessoal de prompts.',
        ],
        points: [
          {
            title: 'Gerenciamento',
            description:
              'Cadastrar, editar e excluir prompts.',
          },
          {
            title: 'Pesquisa',
            description:
              'Localizar prompts por meio de buscas de texto.',
          },
          {
            title: 'Armazenamento',
            description:
              'Salvar automaticamente os conteúdos no navegador.',
          },
        ],
      },
      {
        id: 'tecnologias',
        title: 'Tecnologias utilizadas',
        paragraphs: [
          'O projeto foi desenvolvido com HTML, CSS e JavaScript, utilizando LocalStorage para salvar os prompts.',
          'A interface foi baseada em um design do Figma, com foco em responsividade e organização visual.',
        ],
      },
      {
        id: 'desafios',
        title: 'Desenvolvimento e desafios',
        paragraphs: [
          'O trabalho envolveu estruturar uma interface funcional e implementar operações de cadastro, edição, exclusão e pesquisa sem utilizar backend.',
          'Ferramentas de inteligência artificial auxiliaram o desenvolvimento, com revisão e adaptação manual do código.',
        ],
      },
    ],
  },
};
