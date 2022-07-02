import { Spinner } from 'components/Spinner';
import {
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import { StyledButton } from './styles';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  danger?: boolean;
}

export function Button({
  type = 'button',
  children,
  disabled,
  isLoading,
  ghost,
  danger,
}:SubmitButtonProps) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading} ghost={ghost} danger={danger}>
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}
