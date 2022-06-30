import {
  ChangeEvent, FormEvent, useEffect, useState,
} from 'react';
import { useErrors } from 'hooks';
import { isEmailValid } from 'utils';
import CategoriesService from 'services/CategoriesService';
import { FormGroup } from '..';
import { Button, Input, Select } from '../FormElements';
import { Container as Form, ButtonContainer } from './style';

type ContactFormProps = {
  buttonLabel: string
};

type CategoryProps = {
  id: string
  name: string
};

export function ContactForm({ buttonLabel }:ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = name && errors.length === 0;

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

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
      categoryId,
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

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>

          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
          ))}

        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}
