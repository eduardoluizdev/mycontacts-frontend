import { useEffect, useState } from 'react';
import { ContactsList, PageWrapper, SearchInput } from 'components';
import { ContactDTO } from 'modules/contact.type';

export function Home() {
  const [contacts, setContacts] = useState<ContactDTO[]>([]);
  const [orderBy, setOrderBy] = useState<'asc' | 'desc'>('asc');

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

  return (
    <PageWrapper>
      <SearchInput />
      <ContactsList
        contacts={contacts}
        orderBy={orderBy}
        handleToggleOrderBy={handleToggleOrderBy}
      />
    </PageWrapper>
  );
}
