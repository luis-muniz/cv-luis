import React from 'react';
import {ExperienceCardStyle} from './styles';
import {FiAward} from 'react-icons/fi';
import {DataExperience} from '../../data/luis';

interface ExperienceCardProps{
  data: DataExperience ;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({data}) => {
  return (
    <ExperienceCardStyle>

      {data.yaer ?
      <>
        <div>
          <FiAward size={20}/>
          {data.yaer && <span>{data.yaer}</span>}
        </div>
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </>
      :
      <>
        <div>
          <FiAward size={20}/>
          <h3>{data.title}</h3>         
        </div>
        <div>
          <p>{data.description}</p>
        </div>
      </>
      }
    </ExperienceCardStyle>
  );
}

export default ExperienceCard;