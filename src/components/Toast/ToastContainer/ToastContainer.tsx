import { useEffect, useState } from 'react';
import { toastEventManager } from 'utils';
import { ToastMessage, ToastMessageProps } from '../ToastMessage';
import { Container } from './style';

type MessageProps = {
  id: number
  text: string
  type?: 'default' | 'danger' | 'success'
};

export function ToastContainer() {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    function handleAddToast({ type, text }:ToastMessageProps) {
      setMessages((prevStart) => [
        ...prevStart,
        { id: Math.random(), text, type },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          type={message.type}
          text={message.text}
        />
      ))}

    </Container>
  );
}
