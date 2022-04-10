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

      <FormGroup>
        <Input placeholder="E-mail" />
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
