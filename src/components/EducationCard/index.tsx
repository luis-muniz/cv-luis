import React from 'react';
import {EducationCardStyle} from './styles';

import MortaboardIcon from '../../assets/mortarboard-year-icon.svg';
import {DataEducation} from '../../data/luis';

interface EducationCardProps{
  data: DataEducation ;
}

const EducationCard: React.FC<EducationCardProps> = ({data}) => {
  return (
    <EducationCardStyle>
      <div>
        <img src={MortaboardIcon} alt=""/>
        <span>{data.year}</span>
      </div>
      <div>
  <h3>{data.institute}</h3>
  <h4>{data.curse}</h4>
  <p>{data.description}</p>
      </div>
    </EducationCardStyle>
  );
}

export default EducationCard;