import { Spinner } from 'components';
import { ReactPortal } from '../ReactPortal';
import { Overlay } from './style';

type LoaderProps = {
  isLoading: boolean;
};

export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal locale="loader-root">
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}
