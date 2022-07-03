import { ToastMessageProps } from 'components';

type ToastProps = ToastMessageProps;

export function toast({ text, type }:ToastProps) {
  const event = new CustomEvent('addtoast', {
    detail: {
      type,
      text,
    },
  });

  document.dispatchEvent(event);
}
