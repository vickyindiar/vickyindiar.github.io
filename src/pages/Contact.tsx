import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact:FC = () => (
  <Main title="Contact" description="" >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div>

      </div>
      <div className="email-at">
        <p>If you have any question or just wanna say hi, Feel free to get in touch. You can email me at: </p>
        <EmailLink messages={['vickyindiarto']}/>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
