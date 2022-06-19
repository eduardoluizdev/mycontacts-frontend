import {
  ChangeEvent, useCallback, useEffect, useMemo, useState,
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

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
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
        handleTryAgain={handleTryAgain}
      />
    </PageWrapper>
  );
}
