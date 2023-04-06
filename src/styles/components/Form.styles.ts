import styled from '@emotion/styled';

export const FormCont = styled.div`
  width: 100%;
  max-width: 850px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-family: 'Lato', sans-serif;

    input {
      font-family: 'Lato', sans-serif;
      font-size: 1rem;
      padding: .6rem 1rem;
      border: none;
      border-radius: 5px;
      font-weight: 600;
      cursor: pointer;
      background-color: deepskyblue;
      transition: all ease .3s;

      &:hover {
        background-color: #0099cc;
      }
    }
  }
`;

const InputSubmit = styled.input``;
