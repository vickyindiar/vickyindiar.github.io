import React, { Suspense, lazy, useState } from 'react';

import { Link } from 'react-router-dom';
import routes from '../../data/routes';
import ThemeToggle from './ThemeToggle';

import {slide as Menu} from 'react-burger-menu';
//  const {sile as Menu} = lazy(() => import('react-burger-menu'));

const Hamburger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
        <li key={'togle_theme_key'}>
            <ThemeToggle />
          </li>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      {/* <Suspense fallback={<></>}> */}
        <Menu right isOpen={open}>
          <ul className="hamburger-ul">
            {routes.map((l) => (
              <li key={l.label}>
                <Link to={l.path} onClick={() => setOpen(!open)}>
                  <h3 className={l.index && 'index-li'||''}>{l.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
      {/* </Suspense> */}
    </div>
  );
};

export default Hamburger;
