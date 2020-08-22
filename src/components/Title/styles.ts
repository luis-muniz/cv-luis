import styled from 'styled-components';

export const TitleStyle = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background: #29292E;
  border-radius: 8px;
  padding: 3px;

  > img{
    margin-left: 20px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }

  > span {
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }
`;