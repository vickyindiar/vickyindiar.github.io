import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p> A simple, responsive, react application written with Typescript and Redux Tool Kit. </p>
        </div>
      </header>
      <p> Welcome to my website. Want to know me more? Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/experiences">experiences</Link>, {' '}
        view <Link to="/skills">skills</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
