import React, { FC } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { IExperiences } from '../../data/experiences'; 
interface IProps {
  data: IExperiences
}
const Cell:FC<IProps> = (props) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3><a href={props.data.link}>{props.data.title}</a></h3>
        <p>{props.data.subtitle}</p>
        {/* <time className="published">{dayjs(props.data.date).format('MMMM, YYYY')}</time> */}
      </header>
      <a href={props.data.link} className="image"   >
        <img src={`${process.env.PUBLIC_URL}${props.data.image}`} alt={props.data.title} className={props.data.image.includes('Delphi') ? 'img-delphi' : ''} />
      </a>
      <div className="description">
        <p>{props.data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
