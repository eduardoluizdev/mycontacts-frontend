import {
  PageWrapper, PageHeader, Input, Select, Button,
} from '../../components';

export function CreateContact() {
  return (
    <PageWrapper>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" autoComplete="none" />
      <Select placeholder="Categoria">
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>

      <Button type="submit">
        Salvar Alterações
      </Button>

      <Button type="submit" disabled>
        Salvar Alterações
      </Button>
    </PageWrapper>
  );
}
