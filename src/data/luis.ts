export interface DataEducation{
  year: string;
  institute: string;
  curse: string;
  description?: string;
}

export interface DataExperience{
  yaer?: string;
  title: string;
  description?: string;
}

export interface DataCV{
  name: string;
  profission: string;
  phone: string;
  email:string;
  place:string;
  about:string;
  educations: DataEducation[];
  experiences: DataExperience[];
  hardSkills: string[];
  softSkills: string[];
}


export const Data:DataCV = {
  name: 'LUIS FERNANDO LOPES MUNIZ',
  profission: 'DEVELOPER FULLSTACK',
  phone: '(98)  99174-6041',
  email: 'LUIS.FERNANDOLMUNIZ@GMAIL.COM',
  place: 'RUSSAS, CEARÁ',
  about: 'Graduando em Eng. de Software pela UFC, estou em busca da minha primeira oportunidade no mercado, e por isso venho me atualizando nas teconlogias que o mercado mais usa atualmente. Estou disposto tanto à aprender mais, como contribuir, trabalhando com uma equipe comprometida e experiente para atingir as metas da empresa, crescendo profissionalmente e ganhanho habilidade de resolver problemas reais.',
  educations: [
    {
      year: '2017-2021',
      institute: 'Universidade Federal do Ceará - Campus Russas',
      curse: 'Engenheiro de Software',
      // description: 'EU FIZ ENA ISID ISCISDI IJSIDIF SIISIBD BSIB BSDB SBUB S ISBIB ISBI BBSDB SISDHFSH DISH SDHFSHD FHSDH FIUSFHIU'
    },
    {
      year: '2014-2016',
      institute: 'Instituto Federal de Educação, Ciência e Tecnologia do Maranhão',
      curse: 'Técnico em Informática',
      // description: 'EU FIZ ENA ISID ISCISDI IJSIDIF SIISIBD BSIB BSDB SBUB S ISBIB ISBI BBSDB SISDHFSH DISH SDHFSHD FHSDH FIUSFHIU'
    }
  ],
  experiences: [
    {
      yaer: '2020 - 2021',
      title: 'Analista e Desenvolvedor - Projeto de Extensão',
      description: 'É um Projeto de Extensão da faculdade onde o aluno consegue através de um processo seletivo. Temos como objetivo o desenvolvimento de um sistema web e mobile, para gerenciar o processo de monitoria dentro da universidade. Iremos passar pela análise do problema, elicitar e especificar os requisitos, e depois desenvolver o sistema. Nossa equipe é composta por seis membros e estamos utilizando Scrum e Kaban no projeto, e pretendemos usar tecnlogias como React Js e Native, Node Js, GitFlow e Integração Continua.'
    },
    {
      yaer: '2019 - 2020',
      title: 'Monitor de Programação Orientada a Objetos',
      description: 'Programa de Iniciação a Docência - PID, mais conhecido como monitoria, é uma bolsa que o aluno consegue através de um processo seletivo. O objetivo da bolsa é ajudar junto ao professor, alunos da disciplina sobre conceitos importantes e aplicando atividades teóricas e práticas, e sanando as possíveis dúvidas sobre a Orienteção a Objetos.'
    },
    {
      yaer: '2018 - 2019',
      title: 'Professor do Curso Lógica de Programação',
      description: 'O Projeto de Extensão corresponde a uma bolsa adquirida na universidade por meio de um processo seletivo. Esses projetos têm como objetivo a realização de projetos para a comunidade na qual a universidade está situada. O projeto a qual fui selecionado, foi da realização de um Curso de Programação voltado para alunos do Ensino Médio da comunidade, onde eu seria o professor. Nesse projeto, adotamos a Lingaguem C para ensino dos fundamentos importantes sobre programação, com atividades teóricas e práticas.'
    },
    {
      title: 'Sistema Be The Hero',
      description: 'Um sistema completo (web, mobile e backend) desenvolvido em uma semana em um evento chamado "Semana OmniStack" da empresa Rockeseat. Apliquei na prática conceitos importantes das tecnologias Node Js, React Js e Native.'
    },
    {
      title: 'Sistema de Controle de Finanças - GoFinances',
      description: 'Um sistema web em React Js, que consome uma api própria desenvolvida em Node Js, mantendo informações das finanças do usuário. Nesse projeto, desenvolvi uploads de arquivos para o servidor e fiz paginação dos dados apresentados no frontend.'
    }
  ],
  hardSkills: ['React Js', 'React Native', 'Node Js', 'Git','SQL','JavaScript','TypeScript','Scrum','Kanban','UML','CSS','HTML', 'Figma', 'TDD', 'Linux', 'C', 'C#', 'Java', 'Unity', 'PHP'],
  softSkills: ['Liderança', 'Organização', 'Responsável', 'Motivador', 'Foco', 'Colaboração', 'Flexibilidade', 'Negociação', 'Comunicação', 'Trabalho em Equipe', 'Aprendizagem Fácil', 'Resolução de Problemas', 'Ética']
}