import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import Typist from 'react-text-typist';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <article className='card_slide_main'>
         <div className='card_slide_content'>
            <h3 className='card_slide_title'>Vicky Indiarto</h3>
            <span className='card_slide_subtitle'>Hi Everyone, </span>
            <p className='card_slide_description'>Welcome to my personal website</p>
          </div>
      </article>

      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/vicky.jpg`} alt="" />
      </Link>
      <header>
        <h2>Vicky Indiarto</h2>
        <Typist sentences={['Be a programmer', 'Learn Everything']} />
        <p><a href="mailto:vickyindiarto@gmail.com">vickyindiarto@gmail.com</a></p>
      </header> */}
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I'm Vicky Indiarto from Bekasi, Indonesia. I have a Bachelor of System Information degree from Gunadarma University. I mostly focus on web development, but i have hight spirit to keep learn on mobile Application and Desktop Application
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
