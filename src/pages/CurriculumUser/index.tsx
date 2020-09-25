import React from "react";
import {FiPhone,FiMail, FiMapPin} from 'react-icons/fi'
import {
  Container,
  Content,
  Header,
  AboutMe,
  Experience,
  Educations,
  Main,
  MainLeft,
  MainRight,
  HardSkills,
  SoftSkills,
} from "./styles";

import Perfil from "../../assets/perfil.jpg";
import Title from "../../components/Title/index";
import EducationCard from "../../components/EducationCard/index"; 
import ExperienceCard from "../../components/ExperienceCard/index";
import Social from "../../components/Social/index";
import {Data} from '../../data/luis';

const CurriculumUser: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={Perfil} alt="" />
          <div>            
            <h1>{Data.name}</h1>            
            <h3>{Data.profission}</h3>
            <div>
              <FiPhone size={15}/>
              <p>{Data.phone}</p>
            </div>
            <div>
              <FiMail size={15}/>
              <p>{Data.email}</p>
            </div>
            <div>
              <FiMapPin size={15}/>
              <p>{Data.place}</p>
            </div>
          <Social />
          </div>
        </Header>
        <AboutMe>
          <Title iconType="aboutMe" name="ABOUT ME" />
          <p>
            {Data.about}
          </p>
        </AboutMe>
        <Main>
          <MainLeft>
            <Educations>
              <Title iconType="education" name="EDUCATION" />
              {Data.educations.map(education => 
              <EducationCard key={education.curse} data={education}/>          
              )}
            </Educations>         
            <HardSkills>
              <Title iconType="hardskills" name="HARD SKILLS" />
              <div>
              <ul>
              {Data.hardSkills.map(hardSkill =>  <li key={hardSkill}>{hardSkill}</li>)}
              </ul>
              </div>
            </HardSkills>
            <SoftSkills>
              <Title iconType="softskills" name="SOFT SKILLS" />
              <div>
              <ul>
                {Data.softSkills.map(softSkill =>  <li key={softSkill}>{softSkill}</li>)}
              </ul>
              </div>
            </SoftSkills>
          </MainLeft>
          <MainRight>
            <Experience>
              <Title iconType="experience" name="EXPERIENCE (PERSONAL PROJECTS)" />
              {Data.experiences.map(experience => 
              <ExperienceCard key={experience.title} data={experience}/>          
              )}
            </Experience>
          </MainRight>
        </Main>
      </Content>
    </Container>
  );
};

export default CurriculumUser;
