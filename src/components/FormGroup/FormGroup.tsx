import { ReactNode } from 'react';
import { Container } from './style';

interface FormGroupProps {
  children: ReactNode
  error?: string | null
}

export function FormGroup({ children, error = null }: FormGroupProps) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
