import './App.css';
import React, { useEffect, useCallback,ForwardedRef, ReactComponentElement, ReactNode, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { navBar, mainBody, about } from './editable-stuff/config';

import Navbar from './components/Navbar'
import MainBody from './components/home/MainBody';
import AboutMe from './components/home/AboutMe';
import Experience from './components/home/Experience';
import Projects from './components/home/Projects';
import Leadership from './components/home/Leadership';
import Skills from './components/home/Skills';
import Footer from './components/Footer'
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

type HomeProps = {

}
const Home: React.ForwardRefRenderFunction<HomeProps> =(props) => {
  return (
    <>
          <MainBody
             gradient={mainBody.gradientColors}
             title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
             message={mainBody.message}
            // icons={mainBody.icons}
          />
          <AboutMe
            heading={about.heading}
            message={about.message}
            showPic={true}
          />
          <Experience />
          <Projects/>
          <Leadership />
          <Skills />
        
    </>
  )
};


function App() {
 // const titleRef = React.useRef<react>()


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL+"/"}>
      {navBar.show && <Navbar />}
      <Routes>
        <Route path="/"  element={<Home />} />
        
      </Routes>
      <Footer>
          <div>
            <h2>vicky</h2>
          </div>
        {/* {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          /> 
        )}*/}
      </Footer>
    </BrowserRouter>
  );
}

export default App;
