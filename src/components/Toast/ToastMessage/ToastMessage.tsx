import { Container } from './style';
import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';

export type ToastMessageProps = {
  text: string
  type?: 'default' | 'danger' | 'success'
};

export function ToastMessage({ text, type = 'default' }:ToastMessageProps) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt="Error" />}
      {type === 'success' && <img src={checkCircleIcon} alt="Success" />}
      <strong>{text}</strong>
    </Container>
  );
}
