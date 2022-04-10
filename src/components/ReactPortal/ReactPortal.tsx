import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type ReactPortalProps = {
  children: ReactNode
  locale: string
};

export function ReactPortal({ children, locale }:ReactPortalProps) {
  return ReactDOM.createPortal(children, document.getElementById(locale) as HTMLElement);
}
