import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background: #fff;
    border-radius: 25px;
    border: 0;
    outline: 0;
    box-shadow: 0px 4px 10px rgba(0, 0 ,0, 0.05);
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
