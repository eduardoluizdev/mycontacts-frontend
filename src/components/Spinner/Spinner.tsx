import { StyledSpinner } from './style';

type SpinnerProps = {
  size?: number
};

export function Spinner({ size = 32 }:SpinnerProps) {
  return <StyledSpinner size={size} />;
}
