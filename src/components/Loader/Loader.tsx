import { ReactPortal } from '../ReactPortal';
import { Overlay } from './style';

export function Loader() {
  return (
    <ReactPortal locale="loader-root">
      <Overlay>
        <div className="loader" />
      </Overlay>
    </ReactPortal>
  );
}
