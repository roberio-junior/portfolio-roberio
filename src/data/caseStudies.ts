
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
          'O OndeTá é um projeto desenvolvido em equipe no IFRN – Campus Currais Novos para melhorar a comunicação entre a população e empresas prestadoras de serviços urbanos.',
          'A solução combina um aplicativo móvel com uma proposta de integração a dispositivos de Internet das Coisas (IoT). O objetivo é permitir a solicitação e o acompanhamento de serviços como coleta de resíduos e manutenção urbana, além da visualização de informações sobre veículos e rotas.',
        ],
      },
      {
        id: 'problema',
        title: 'Problema identificado',
        paragraphs: [
          'Muitas solicitações de serviços urbanos são feitas por telefone ou mensagens, sem um canal centralizado para consultar o andamento dos atendimentos.',
          'A falta de informações sobre os veículos, as rotas e o status do serviço gera incerteza para os usuários e dificulta a comunicação com as empresas responsáveis.',
        ],
      },
      {
        id: 'pesquisa',
        title: 'Pesquisa e descoberta',
        paragraphs: [
          'Antes de definir a solução, a equipe realizou uma pesquisa com 37 participantes para compreender como as pessoas solicitavam e acompanhavam serviços urbanos.',
          'Os resultados reforçaram a importância de centralizar solicitações, dar visibilidade ao andamento dos atendimentos e facilitar o acesso às informações.',
        ],
        points: [
          {
            title: '86% utilizavam telefone ou mensagens',
            description:
              'Participantes que procuravam ou acompanhavam solicitações apenas por esses canais.',
          },
          {
            title: '83% sem visibilidade em tempo real',
            description:
              'Participantes que não tinham acesso a informações em tempo real sobre o atendimento.',
          },
          {
            title: '70% interessados no OndeTá',
            description:
              'Participantes que demonstraram interesse em utilizar a solução apresentada.',
          },
        ],
      },
      {
        id: 'solucao',
        title: 'Solução desenvolvida',
        paragraphs: [
          'O OndeTá reúne usuários e prestadores de serviços em um ambiente digital. Pelo aplicativo, é possível consultar serviços disponíveis, registrar solicitações e acompanhar informações sobre cada atendimento.',
          'Para as empresas, a proposta inclui ferramentas para visualizar solicitações e sua distribuição no mapa. O projeto também explora o rastreamento de veículos por dispositivos IoT, com o objetivo de ampliar o acompanhamento das operações.',
        ],
      },
      {
        id: 'funcionalidades',
        title: 'Funcionalidades',
        paragraphs: [
          'As interfaces apresentadas no projeto contemplam tanto a experiência de quem solicita um serviço quanto a visualização de informações úteis para os prestadores.',
        ],
        points: [
          {
            title: 'Solicitação de serviços',
            description:
              'Consulta de serviços disponíveis e registro de solicitações diretamente pelo aplicativo.',
          },
          {
            title: 'Acompanhamento de atendimentos',
            description:
              'Visualização dos dados da solicitação e do status do serviço.',
          },
          {
            title: 'Visualização em mapa',
            description:
              'Interface geográfica para acompanhar informações de localização dos veículos e seus deslocamentos.',
          },
          {
            title: 'Mapa de demanda',
            description:
              'Visualização da distribuição geográfica das solicitações, com filtros por período, serviço e status.',
          },
          {
            title: 'Gestão de serviços',
            description:
              'Recursos voltados à organização das solicitações e dos serviços oferecidos pelas empresas.',
          },
        ],
      },
      {
        id: 'tecnologias',
        title: 'Tecnologias utilizadas',
        paragraphs: [
          'O aplicativo utiliza React Native e TypeScript, com Axios para comunicação com serviços e Lucide para ícones. O backend foi estruturado com NestJS e PostgreSQL, e o projeto também utilizou Firebase e Neon.',
          'A experiência de interface foi trabalhada no Figma. Entre as ferramentas de desenvolvimento e infraestrutura estão VS Code, Docker, Vercel, Jest, Insomnia, Git e GitHub.',
          'Na parte de IoT, a equipe trabalhou com Raspberry Pi Pico W e um modelo de protótipo com comunicação HTTP por Wi-Fi. A arquitetura proposta para a evolução do rastreamento utiliza GPS, redes móveis e MQTT, seguindo o modelo Publish/Subscribe.',
        ],
      },
      {
        id: 'desafios',
        title: 'Desenvolvimento e desafios',
        paragraphs: [
          'Um dos principais desafios foi pensar a integração entre diferentes camadas da solução: aplicativo móvel, serviços de backend, banco de dados, mapas e hardware.',
          'O trabalho em equipe foi organizado com Kanban, permitindo acompanhar as atividades, realizar entregas frequentes e corrigir problemas ao longo do desenvolvimento.',
        ],
      },
      {
        id: 'resultados',
        title: 'Resultados e aprendizados',
        paragraphs: [
          'O projeto resultou em interfaces para solicitação e acompanhamento de serviços e em uma proposta técnica para integrar o monitoramento de veículos à plataforma.',
          'A pesquisa com usuários ajudou a orientar as decisões do produto. O desenvolvimento também proporcionou experiência com aplicações mobile, backend, IoT e colaboração entre diferentes áreas. A arquitetura MQTT com redes móveis foi apresentada como proposta, não como uma integração já implantada.',
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
          'O CT Mineral é um sistema web desenvolvido em equipe durante o Projeto Integrador I do curso de Tecnologia em Sistemas para Internet do IFRN – Campus Currais Novos.',
          'A aplicação foi criada para apoiar as atividades do Centro de Tecnologia Mineral, reunindo em uma única plataforma o gerenciamento de clientes, amostras, processos laboratoriais e orçamentos.',
        ],
      },
      {
        id: 'problema',
        title: 'Problema identificado',
        paragraphs: [
          'O CT Mineral utilizava planilhas e formulários para armazenar informações de clientes e amostras. Esses registros ficavam distribuídos entre diferentes documentos, dificultando a centralização e a consulta dos dados.',
          'Além disso, equipamentos laboratoriais geravam arquivos com dados brutos que precisavam ser tratados para separar as informações necessárias às análises.',
        ],
      },
      {
        id: 'solucao',
        title: 'Solução desenvolvida',
        paragraphs: [
          'A equipe desenvolveu uma plataforma web para centralizar as informações do laboratório e automatizar parte de suas atividades operacionais.',
          'O sistema permite cadastrar clientes e amostras, gerenciar processos de análise, gerar orçamentos em PDF e tratar planilhas Excel. Também conta com autenticação institucional e permissões específicas para técnicos e diretores.',
        ],
      },
      {
        id: 'funcionalidades',
        title: 'Funcionalidades',
        paragraphs: [
          'As funcionalidades foram organizadas de acordo com as etapas de atendimento e análise realizadas pelo CT Mineral.',
        ],
        points: [
          {
            title: 'Gerenciamento de clientes',
            description:
              'Cadastro e consulta de dados de contato, endereço e técnicos responsáveis pelos serviços.',
          },
          {
            title: 'Cadastro de amostras',
            description:
              'Registro das amostras recebidas, com identificação, foto opcional, cliente e processos laboratoriais associados.',
          },
          {
            title: 'Geração de orçamentos',
            description:
              'Criação automática de documentos PDF com identificação do orçamento, informações do cliente e da amostra e valor do serviço.',
          },
          {
            title: 'Tratamento de arquivos Excel',
            description:
              'Processamento dos dados brutos de análises laboratoriais e geração de novas planilhas tratadas, disponíveis para download.',
          },
          {
            title: 'Autenticação institucional',
            description:
              'Acesso de usuários autorizados por meio do SUAP do IFRN, utilizando OAuth.',
          },
          {
            title: 'Controle de permissões',
            description:
              'Perfis de técnicos e diretores, com funcionalidades administrativas restritas a quem possui autorização.',
          },
          {
            title: 'Gerenciamento de processos',
            description:
              'Cadastro e manutenção dos serviços de análise oferecidos pelo laboratório e de seus respectivos valores.',
          },
        ],
      },
      {
        id: 'tecnologias',
        title: 'Tecnologias utilizadas',
        paragraphs: [
          'A interface web foi desenvolvida com Vue.js, TypeScript e Vuetify. O backend utiliza AdonisJS e TypeScript, com PostgreSQL para persistência de dados e Python entre as tecnologias utilizadas no projeto.',
          'O desenvolvimento contou com Docker, VS Code, Git e GitHub. Entre as integrações estão a autenticação com SUAP via OAuth e o Supabase Storage, utilizado para armazenar as planilhas tratadas.',
        ],
      },
      {
        id: 'desafios',
        title: 'Desenvolvimento e desafios',
        paragraphs: [
          'O projeto exigiu compreender a rotina de um laboratório e traduzir suas necessidades em funcionalidades, requisitos e estruturas de dados. A equipe elaborou diagramas de casos de uso, classes e banco de dados para orientar o desenvolvimento.',
          'A integração com a autenticação institucional, a diferenciação de permissões e o tratamento automatizado de arquivos Excel também foram partes importantes da solução.',
        ],
      },
      {
        id: 'resultados',
        title: 'Resultados e aprendizados',
        paragraphs: [
          'O desenvolvimento resultou em uma aplicação que reúne atividades operacionais do CT Mineral, como cadastros, organização de serviços, geração de orçamentos e tratamento de dados laboratoriais.',
          'O trabalho proporcionou experiência em desenvolvimento web full stack, modelagem de dados, integração de serviços e automação de processos para uma necessidade real. O material do projeto não apresenta métricas de produtividade nem confirma implantação em produção.',
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
