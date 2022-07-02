import { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  danger?: boolean;
  ghost?: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
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
  display: flex;
  align-items: center;
  justify-content: center;

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

  ${({ theme, danger }) => danger && css`
    background:  ${theme.colors.danger.main};

    &:hover {
     background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}

  ${({ theme, ghost }) => ghost && css`
    background:  none;
    color: ${theme.colors.gray.light};
    font-weight: normal;
    box-shadow: none;

    &:hover {
     background: none;
    }

    &:active {
      background: none;
    }
  `}
`;
