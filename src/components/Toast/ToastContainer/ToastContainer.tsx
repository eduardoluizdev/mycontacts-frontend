import { useEffect, useState, useCallback } from 'react';
import { toastEventManager } from 'utils';
import { ToastMessage } from '../ToastMessage';
import { Container } from './style';

type MessageProps = {
  id: number
  text: string
  type?: 'default' | 'danger' | 'success'
  duration: number
};

export function ToastContainer() {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }:MessageProps) {
      setMessages((prevStart) => [
        ...prevStart,
        {
          id: Math.random(), text, type, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((messageId:number) => {
    setMessages((prevStart) => prevStart.filter(({ id }) => id !== messageId));
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}

    </Container>
  );
}
