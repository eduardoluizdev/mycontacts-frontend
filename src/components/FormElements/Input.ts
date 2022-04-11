import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ImputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean | string;
};

export const Input = styled.input<ImputProps>`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0 ,0, 0.05);
  height: 52px;
  border-radius: 4px;
  border: 2px solid #fff;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main};

    &:focus {
    border-color: ${theme.colors.danger.main};
  }
  `}
`;
