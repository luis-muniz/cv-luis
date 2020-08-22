import React from 'react';
import AboutMeIcon from '../../assets/about-me-icon.svg';
import EducationIcon from '../../assets/mortarboard-icon.svg';
import HardSkillsIcon from '../../assets/hardskills-icon.svg';
import ExperienceIcon from '../../assets/experience-icon.svg';
import SoftSkillsIcon from '../../assets/softskills-icon.svg';
import {TitleStyle} from './styles';

const titleIcons = {
  aboutMe: AboutMeIcon,
  education: EducationIcon,
  hardskills: HardSkillsIcon,
  experience: ExperienceIcon,
  softskills: SoftSkillsIcon,
}

interface TitleProps {
  name: string;
  iconType: 'aboutMe' | 'education' | 'hardskills' | 'experience' | 'softskills';
}

const Title: React.FC<TitleProps> = ({name,iconType}) => {
  return (
    <TitleStyle>
      <img src={titleIcons[iconType]} alt=""/>
      <span>{name}</span>
    </TitleStyle>
  );
}

export default Title;