import { ContactForm, PageHeader, PageWrapper } from 'components';

export function EditContact() {
  return (
    <PageWrapper>
      <PageHeader title="Editar Eduardo Luiz" />
      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={async () => {
          await true;
        }}
      />
    </PageWrapper>
  );
}
