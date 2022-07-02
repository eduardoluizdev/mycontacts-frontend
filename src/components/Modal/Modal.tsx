import { Button } from '..';
import { ReactPortal } from '../ReactPortal';
import { Container, Footer, Overlay } from './styles';

type ModalProps = {
  title: string;
  paragraph: string;
  danger?: boolean
};

export function Modal({ title, paragraph, danger = false }:ModalProps) {
  return (
    <ReactPortal locale="modal-root">
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>
          <p>{paragraph}</p>

          <Footer>
            <Button ghost>Cancelar</Button>
            <Button danger={danger}>Deletar</Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
