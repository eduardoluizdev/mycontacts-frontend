import { ReactNode } from 'react';
import { Spinner } from 'components';
import { Container } from './style';

interface FormGroupProps {
  children: ReactNode
  error?: string | null
  isLoading?: boolean
}

export function FormGroup({ children, error = null, isLoading = false }: FormGroupProps) {
  return (
    <Container>
      <div className="form-item">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}
