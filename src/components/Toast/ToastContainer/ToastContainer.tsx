import { useEffect, useState } from 'react';
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
    function handleAddToast(event:any) {
      const { text, type } = event.detail;

      setMessages((prevStart) => [
        ...prevStart,
        { id: Math.random(), text, type },
      ]);
    }

    document.addEventListener('addtoast', handleAddToast);

    return () => {
      document.removeEventListener('addtoast', handleAddToast);
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
