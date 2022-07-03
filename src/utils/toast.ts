import { ToastMessageProps } from 'components';
import EventManager from 'lib/EventManager';

type ToastProps = ToastMessageProps;

export const toastEventManager = new EventManager();

export function toast({ text, type }:ToastProps) {
  toastEventManager.emit('addtoast', { text, type });
}
