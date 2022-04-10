import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type ReactPortalProps = {
  children: ReactNode
};

export function ReactPortal({ children }:ReactPortalProps) {
  return ReactDOM.createPortal(children, document.getElementById('modal-root') as HTMLElement);
}
