// TODO Add a couple lines about each project

export interface IExperiences {
  title: string,
  subtitle: string,
  link: string,
  image: string,
  date: string,
  desc: string
}

const data:IExperiences[] = [
  {
    title: 'SysAd Web',
    subtitle: 'Advertising Agency System',
    link:'#',
    image: '/images/sysad.JPG',
    date: '2015-11-20',
    desc: 'Built with ASP.NET MVC Framework, Devextreme UI and Advantage Database System'
  },
  {
    title: 'CSM Ticketing',
    subtitle: 'Ticketing support system',
    link: '#',
    image: '/images/ticketing2.JPG',
    date: '2015-09-20',
    desc: 'Built with .Net Core Rest API, ReactJs with redux-saga, and Mysql for database system'
  },
  {
    title: 'Approval Management ',
    subtitle: 'Approval management tools for Advertaising web application',
    link: 'http://www.spacepotato.org',
    image: '/images/Approval.JPG',
    date: '2015',
    desc:'Built with Delphi MVC Framework as Rest API, ReactJS with redux-thunk, Devextreme UI and Advantage Database System',
  },
  {
    title: 'Micro services Facebook and Google Ads API',
    subtitle: 'Restfull api services for delphi desktop application',
    link:'#',
    image: '/images/microservices-vector.jpg',
    date: '2015-05-15',
    desc:
      'Built with Php Laravel 8 framework, and IIS Server' 
  },
  {
    title: 'Tool and Report for An Advertising Desktop App',
    subtitle: '',
    link: '#',
    image: '/images/Delphi.png',
    date: '2015-05-15',
    desc: 'Delphi Rio 10.3, FastReport and Advantage Database Server' 
  },
];

export default data;
