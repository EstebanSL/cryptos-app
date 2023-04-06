import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  box-sizing: border-box;

  h2 {
    font-family: 'Lato', sans-serif;
    font-size: 2.5rem;
    color: deepskyblue;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  hr {
    width: 50%;
    margin-bottom: 2rem;
  }

  #contInputs {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const Image = styled.img`
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;
`;

export const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
`;
