import { ChangeEvent, FormEvent, useState } from 'react';
import { useErrors } from 'hooks';
import { isEmailValid } from 'utils';
import { FormGroup } from '..';
import { Button, Input, Select } from '../FormElements';
import { Container as Form, ButtonContainer } from './style';

type ContactFormProps = {
  buttonLabel: string
};

export function ContactForm({ buttonLabel }:ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleNameChange({ target }:ChangeEvent<HTMLInputElement>) {
    const nameField = target.value;
    setName(nameField);

    if (!nameField) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
      return;
    }

    removeError('name');
  }

  function handleEmailChange({ target }:ChangeEvent<HTMLInputElement>) {
    const emailField = target.value;
    setEmail(emailField);

    if (emailField && !isEmailValid(emailField)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
      return;
    }

    removeError('email');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          autoComplete="default"
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          autoComplete="default"
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          autoComplete="default"
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Lead</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
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
