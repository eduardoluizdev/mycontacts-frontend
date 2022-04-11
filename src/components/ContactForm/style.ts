import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container = styled.form<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>``;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  button {
    width: 100%;
  }
`;
