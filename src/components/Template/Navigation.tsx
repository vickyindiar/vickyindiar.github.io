import React, {FC, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

import Hamburger from './Hamburger';
// import routes from '../../data/routes';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { changeRouteActive } from '../../store/layoutSlice';

import ThemeToggle from './ThemeToggle';


// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation:FC = () =>{
  const routes = useAppSelector(s => s.layout.nav)
  const dispatch = useAppDispatch()
  const location = useLocation()
  
  
  useEffect(() => {
    let shouldActive = routes.find(f => location.pathname.includes(f.label.toLowerCase()))
    if(shouldActive){
      dispatch(changeRouteActive(shouldActive))
    }
  }, [])

  return (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}  className={l.active ? 'active' :''} onClick={() => dispatch(changeRouteActive(l)) }> {l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path} className={l.active ? 'active' :''} onClick={() => dispatch(changeRouteActive(l)) }>{l.label}</Link>
          </li>
        ))}
          <li key={'togle_theme_key'}>
            <ThemeToggle />
          </li>
      </ul>
    </nav>
    <Hamburger />
  </header>
  )
};

export default Navigation;
