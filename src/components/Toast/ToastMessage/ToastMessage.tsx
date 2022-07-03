import { useEffect } from 'react';
import { Container } from './style';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export type ToastMessageProps = {
  message: {
    id: number
    text: string
    type?: 'default' | 'danger' | 'success'
    duration: number
  },

  onRemoveMessage: (messageId:number) => void
};

export function ToastMessage({
  message, onRemoveMessage,
}:ToastMessageProps) {
  const {
    id, text, type = 'default',
  } = message;

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <Container
      type={type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {type === 'danger' && <img src={xCircleIcon} alt="Error" />}
      {type === 'success' && <img src={checkCircleIcon} alt="Success" />}
      <strong>{text}</strong>
    </Container>
  );
}
