import styled from 'styled-components';

export const EducationCardStyle = styled.div`

  padding: 20px 20px 0px;

  > div:first-of-type{
    display: flex;
    align-items: center;

    > img {
      width: 20px;
      height: 20px;
      color: #E6525C;
    }

    > span{
      margin-left: 18px;

    }
  }

  > div + div{
      display: flex;
      flex-direction: column;
      border-left: 2px solid #E6525C;
      margin-left: 9.5px;
      padding-left: 26.5px;

      h3{
        font-weight: 400;
        color: #E6525C;
      }

      h4{
        font-weight: 400;
      }

      p{
        font-size: 14px;
      }
  }
`;