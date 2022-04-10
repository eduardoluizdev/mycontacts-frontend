import { Button } from '../FormElements';
import { ReactPortal } from '../ReactPortal';
import { Container, Footer, Overlay } from './styles';

type ModalProps = {
  title: string;
  paragraph: string;
  danger?: boolean
};

export function Modal({ title, paragraph, danger = false }:ModalProps) {
  return (
    <ReactPortal>
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>
          <p>{paragraph}</p>

          <Footer>
            <Button type="button" ghost>Cancelar</Button>
            <Button type="button" danger={danger}>Deletar</Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}
