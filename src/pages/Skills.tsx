import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import { SkillBar } from 'react-skillbars';


const skillData = [
  { type: 'Html/CSS', level: 80 },
  { type: 'ReactJS', level: 75 },
  { type: 'Javascript', level: 75 },
  { type: 'ASP.Net', level: 65 },
  { type: 'laravel', level: 60 },
  { type: 'Delphi', level: 50 },
  { type: 'ReactNative', level:50  },
  { type: 'SQL', level: 65 }
]



const Skills:FC = () => (
  <Main title="Skills" description={`"Why do Java programmers have to wear glasses? Because they don’t C#"`} >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/skills">Skills</Link></h2>
          <p>{`Why do Java programmers have to wear glasses? Because they don’t C#`}&#128540;</p>
        </div>
      </header>
      <div className='row'>
        <div className='col'> 
          <SkillBar skills={skillData} height={30} animationDelay={200}/>
        </div>
      </div>
    </article>
  </Main>
);

export default Skills;
