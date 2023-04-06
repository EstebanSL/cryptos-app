import styled from "@emotion/styled";

export const SelectCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: 1.2rem;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
  }

  select {
    padding: .6rem 1rem;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`