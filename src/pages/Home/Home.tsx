import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import {
  ContactsList, Loader, PageWrapper, SearchInput,
} from 'components';
import { Contact } from 'modules/contact.type';
import delay from 'utils/delay';

export function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);

        await delay(500);

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
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
      />
    </PageWrapper>
  );
}
