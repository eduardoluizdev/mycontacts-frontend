import {
  PageWrapper, PageHeader, ContactForm, ContactDTO,
} from 'components';
import ContactsService from 'services/ContactsService';

export function CreateContact() {
  async function handleSubmit(formData: ContactDTO) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactsService.createContacts(contact);
    } catch {
      // eslint-disable-next-line no-alert
      alert('Erro ao criar contato');
    }
  }

  return (
    <PageWrapper>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
