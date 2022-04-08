import { ReactNode } from 'react';
import { Header } from '../Header';
import { Container } from './styles';

interface PageWrapperProps {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Container>
      <Header />
      { children }
    </Container>
  );
}
