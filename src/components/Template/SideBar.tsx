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
      <p>Hi, I&apos;m Michael. I like building things.
        I am a <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC Alumni, and
        the co-founder and CTO of <a href="https://arthena.com">Arthena</a>. Before Arthena I was
        at <a href="https://matroid.com">Matroid</a>
        , <a href="https://planet.com">Planet</a>
        , <a href="https://planetaryresources.com">Planetary Resources</a>
        , <a href="https://facebook.com">Facebook</a>
        , and <a href="https://seds.org">SEDS</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
