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
  about: 'Graduando em Engenharia de Software pela Universidade Federal do Ceará, estou em busca da minha primeira oportunidade no mercado. Por isso venho me atualizando nas tecnologias que o mercado mais usa atualmente e como bom aluno, sempre busco participar de todos os tipos de projetos na graduação, dessa forma desenvolvo meu lado técnico e comportamental. Estou sempre disposto a aprender mais, e quero adquirir e contribuir com conhecimento, trabalhando com uma equipe comprometida e experiente para atingir as metas da empresa.',
  educations: [
    {
      year: '2017-2021',
      institute: 'Universidade Federal do Ceará - Campus Russas',
      curse: 'Engenheiro de Software',
    },
    {
      year: '2014-2016',
      institute: 'Instituto Federal de Educação, Ciência e Tecnologia do Maranhão',
      curse: 'Técnico em Informática',      
    }
  ],
  experiences: [
    {
      yaer: '2020 - 2021',
      title: 'Trainee - Include Jr',
      description: 'A Include Jr é uma empresa júnior da Universidade Federal do Ceará, onde os alunos podem aplicar na prática o conteúdo visto no curso. No momento, atuo nos setores de vendas, gestão e desenvolvimento. Sou Tech Leader de um projeto atualmente e também sou responsável por encontrar novos clientes para empresa.'
    },{
      yaer: '2020 - 2021',
      title: 'Desenvolvedor e Analista - InovaFisio',
      description: 'O InovaFisio é um aplicativo desenvolvido em uma bolsa de Iniciação Científica da Universidade Federal do Ceará, que consiste em ajudar pacientes que tiveram um acidente vascular encefálico (AVE) com a tecnologia de telereabilitação, na recuperação da função motora de membros superiores em usuários com sequelas de AVE. Sou responsável por fazer manutenção, correções e melhorias no sistema.'
    },
    {
      yaer: '2020 - 2021',
      title: 'Analista e Desenvolvedor - Projeto de Apoio ao Ensino (PAE)',
      description: 'O PAE é um Projeto de Extensão da faculdade onde o aluno consegue através de um processo seletivo. Temos como objetivo o desenvolvimento de um sistema web e mobile, para gerenciar o processo de monitoria dentro da universidade. Passamos pela análise do problema, elicitação e especificação dos requisitos, e agora estamos na etapa de desenvolvimento do sistema.'
    },    
    {
      yaer: '2019 - 2020',
      title: 'Monitoria de Programação Orientada a Objetos',
      description: 'Programa de Iniciação a Docência - PID, mais conhecido como monitoria, é uma bolsa que o aluno consegue através de um processo seletivo. O objetivo da bolsa é ajudar junto ao professor, alunos da disciplina sobre conceitos importantes e aplicando atividades teóricas e práticas, sanando as possíveis dúvidas sobre a disciplina de Orientação a Objetos.'
    },
    {
      yaer: '2018 - 2019',
      title: 'Professor do Curso Lógica de Programação',
      description: 'O Projeto de Extensão corresponde a uma bolsa adquirida na universidade por meio de um processo seletivo. Esses projetos têm como objetivo a realização de projetos para a comunidade na qual a universidade está situada. O projeto a qual fui selecionado, foi da realização de um Curso de Programação voltado para alunos do Ensino Médio da comunidade, onde eu seria o professor. Nesse projeto, adotamos a Linguagem C para ensino dos fundamentos importantes sobre programação, com atividades teóricas e práticas.'
    },
  ],
  hardSkills: ['React Js', 'React Native', 'Node Js', 'Git','SQL','JavaScript','TypeScript','Scrum','Kanban','UML','CSS','HTML', 'Figma', 'TDD', 'Linux', 'C', 'C#', 'Java', 'Unity', 'PHP', 'API REST'],
  softSkills: ['Liderança', 'Organização', 'Responsável', 'Motivador', 'Foco', 'Colaboração', 'Flexibilidade', 'Negociação', 'Comunicação', 'Trabalho em Equipe', 'Aprendizagem Fácil', 'Ética', 'Resiliência']
}