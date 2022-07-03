import EventManager from 'lib/EventManager';

type ToastProps = {
  text: string;
  type: 'default' | 'danger' | 'success';
  duration?: number;
};

export const toastEventManager = new EventManager();

export function toast({ text, type, duration }:ToastProps) {
  toastEventManager.emit('addtoast', { text, type, duration });
}
