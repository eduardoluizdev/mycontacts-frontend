import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  width: 100%;
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0 ,0, 0.05);
  color: #fff;
  border-radius: 4px;
  padding: 0 16px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
    pointer-events: none;
  }
`;
