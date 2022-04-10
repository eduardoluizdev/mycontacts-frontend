import {
  PageWrapper, PageHeader, ContactForm,
} from '../../components';

export function CreateContact() {
  return (
    <PageWrapper>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </PageWrapper>
  );
}
