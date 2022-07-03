import { Container } from './style';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export type ToastMessageProps = {
  message: {
    id: number
    text: string
    type?: 'default' | 'danger' | 'success'
  },

  onRemoveMessage: (messageId:number) => void
};

export function ToastMessage({
  message, onRemoveMessage,
}:ToastMessageProps) {
  const { id, text, type = 'default' } = message;

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <Container type={type} onClick={handleRemoveToast}>
      {type === 'danger' && <img src={xCircleIcon} alt="Error" />}
      {type === 'success' && <img src={checkCircleIcon} alt="Success" />}
      <strong>{text}</strong>
    </Container>
  );
}
