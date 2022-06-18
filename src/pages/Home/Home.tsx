import {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import { ContactsList, PageWrapper, SearchInput } from 'components';
import { ContactDTO } from 'modules/contact.type';

export function Home() {
  const [contacts, setContacts] = useState<ContactDTO[]>([]);
  const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (res) => {
        const data = await res.json();
        setContacts(data);
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  return (
    <PageWrapper>
      <SearchInput searchTerm={searchTerm} handleChangeSearchTerm={handleChangeSearchTerm} />
      <ContactsList
        contacts={filteredContacts}
        orderBy={orderBy}
        handleToggleOrderBy={handleToggleOrderBy}
      />
    </PageWrapper>
  );
}
