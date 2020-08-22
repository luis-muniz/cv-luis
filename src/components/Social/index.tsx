import React from 'react';

import {SocialStyle} from './styles';
import LinkedinIcon from '../../assets/linkedin-icon.svg';
import GithubIcon from '../../assets/github-icon.svg';

const Social:React.FC = () => {
  return (
    <SocialStyle>
      <a href="https://www.linkedin.com/in/luisfernandomuniz"><img src={LinkedinIcon} alt=""/></a>
      <a href="https://github.com/nandolm"><img src={GithubIcon} alt=""/></a>
    </SocialStyle>
  );
}

export default Social;