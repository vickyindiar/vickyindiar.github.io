import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';
import { useAppSelector } from '../store/hooks';

interface Props {
  title?: string 
  description?: string
  fullPage?: boolean
  children?: ReactElement
}

const Main:FC<Props> = ({title, description, children, fullPage}) => {
  return (
  <HelmetProvider>
    {/* <Analytics /> */}
    <ScrollToTop />
    <Helmet titleTemplate="%s | Vicky Indiarto" defaultTitle="Vicky Indiarto" defer={false}>
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper" >
      <Navigation />
      <div id="main">
        {children}
      </div>
      {fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
  )
};

export default Main;
