import styled from '@emotion/styled';

export const ResultCont = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #19b2e6;
  display: flex;
  align-items: center;
  max-width: 550px;
  margin: auto;

  @media screen and (max-width: 468px) { 
    flex-direction: column;
  }

  div {
    margin-left: 2rem;

    @media screen and (max-width: 468px) { 
    margin-left: 0;
  }
  }

  img {
    background: #fff;
    max-width: 200px;
    border-radius: 5px;

    @media screen and (max-width: 468px) { 
    margin-bottom: 1rem;
  }
  }

  p {
    font-family: 'Lato', sans-serif;
    margin: 1rem;
  }
`;
