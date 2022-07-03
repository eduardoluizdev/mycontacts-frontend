import {
  PageWrapper, PageHeader, ContactForm, ContactDTO,
} from 'components';
import ContactsService from 'services/ContactsService';
import { toast } from 'utils';

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

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return (
    <PageWrapper>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </PageWrapper>
  );
}
