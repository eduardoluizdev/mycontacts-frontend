import { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Select = styled.select<SelectHTMLAttributes<HTMLSelectElement>>`
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

  &:disabled {
    background: ${({ theme }) => theme.colors.gray.lighter};
    border-color: ${({ theme }) => theme.colors.gray.light};
    opacity: 1;
  }
`;
