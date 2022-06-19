import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import {
  ContactsList, Loader, PageWrapper, SearchInput,
} from 'components';
import { Contact } from 'modules/contact.type';
import ContactsService from 'services/ContactsService';

export function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy);

        setContacts(contactsList);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <PageWrapper>
      <Loader isLoading={isLoading} />
      <SearchInput searchTerm={searchTerm} handleChangeSearchTerm={handleChangeSearchTerm} />

      <ContactsList
        contacts={filteredContacts}
        orderBy={orderBy}
        handleToggleOrderBy={handleToggleOrderBy}
        hasError={hasError}
      />
    </PageWrapper>
  );
}
