import { useEffect, useState } from 'react';
import { toastEventManager } from 'utils';
import { ToastMessage } from '../ToastMessage';
import { Container } from './style';

type MessageProps = {
  id: number
  text: string
  type?: 'default' | 'danger' | 'success'
};

export function ToastContainer() {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    function handleAddToast({ type, text }:MessageProps) {
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

  function handleRemoveMessage(messageId:number) {
    setMessages((prevStart) => prevStart.filter(({ id }) => id !== messageId));
  }

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
