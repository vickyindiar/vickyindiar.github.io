import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/experiences';

const Experiences:FC = () => (
  <Main title="Experience" description="" >
    <article className="post" id="experience">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/experiences">Experiences</Link></h2>
          <p>A selections of projects that I have worked on and or i am in</p>
        </div>
      </header>
      {data.map((exp) => (
        <Cell data={exp} key={exp.title} />
      ))}
    </article>
  </Main>
);

export default Experiences;
