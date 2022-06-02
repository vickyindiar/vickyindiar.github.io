
export interface Iroutes{
      index?: boolean,
      active?:boolean,
      label:string,
      path:string
}

const routes = [
  {
    index: true,
    active: true,
    label: "VI",
    path: '/',
  },
  {
    active: false,
    label: 'About',
    path: '/about',
  },
  {
    active:false,
    label: 'Experiences',
    path: '/experiences',
  },
  {
    active:false,
    label: 'Skills',
    path: '/skills',
  },
  {
    active: false,
    label: 'Resume',
    path: '/resume',
  },
  {
    active: false,
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
