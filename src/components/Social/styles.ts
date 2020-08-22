import styled from 'styled-components';

export const SocialStyle = styled.div`
  display:flex;
  margin-top: 10px;

  a{

    img{
      width:30px;
      height:30px;
      border: none;
      border-radius: 0px;
    }

    & + a{
        margin-left: 10px;
      }
  }

  @media (max-width: 670px) {
    justify-content: center;
  }

`;