import EventManager from 'lib/EventManager';

type ToastProps = {
  text: string;
  type: 'default' | 'danger' | 'success';
};

export const toastEventManager = new EventManager();

export function toast({ text, type }:ToastProps) {
  toastEventManager.emit('addtoast', { text, type });
}
