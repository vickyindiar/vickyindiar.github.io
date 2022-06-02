import React, { lazy, Suspense, useEffect, useCallback,ForwardedRef, ReactComponentElement, ReactNode, useState } from 'react';
// import { Counter } from './features/counter/Counter';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/main.scss'; // All of our styles
import Main from './layouts/Main';


const Index = lazy(() => import('./pages/Index'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Experiences'))
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'))
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL+"/"}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about"  element={<About />} />
        <Route path="/experiences"  element={<Projects />} />
        <Route path="/resume"  element={<Resume />} />
        <Route path="/skills"  element={<Skills />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense >
    </BrowserRouter>
  );
}

export default App;
