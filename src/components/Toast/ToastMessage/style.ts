import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.primary.main};
  `,
  danger: css`
  background-color: ${({ theme }) => theme.colors.danger.main};
  `,
  success: css`
  background-color: ${({ theme }) => theme.colors.success.main};
  `,
};

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  type: 'default' | 'danger' | 'success'
}

export const Container = styled.div<ContainerProps>`
  padding: 16px 32px;
  color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);


  ${({ type }) => containerVariants[type] || containerVariants.default}

  & + & {
    margin-top: 12px;
  }
`;
