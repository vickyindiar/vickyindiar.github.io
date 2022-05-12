import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import { navBar, mainBody } from './editable-stuff/config';
import Navbar from './components/Navbar'
import MainBody from './components/home/MainBody';

const Home = React.forwardRef((props, ref) => {
  return (
    <>
          <MainBody
            gradient={mainBody.gradientColors}
            // title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
            // message={mainBody.message}
            // icons={mainBody.icons}
            //ref={ref}
          />
    </>
  )
});


function App() {
  const titleRef = React.useRef()

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL+"/"}>
      {navBar.show && <Navbar ref={titleRef}/>}
      <Routes>
        <Route path="/"  element={<Home ref={titleRef} />} />
        
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
