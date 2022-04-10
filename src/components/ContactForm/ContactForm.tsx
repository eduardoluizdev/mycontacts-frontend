import { FormGroup } from '..';
import { Button, Input, Select } from '../FormElements';
import { Container as Form, ButtonContainer } from './style';

type ContactFormProps = {
  buttonLabel: string
};

export function ContactForm({ buttonLabel }:ContactFormProps) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Nome" />
      </FormGroup>

      <FormGroup error="O formato do e-mail é inválido.">
        <Input placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}
