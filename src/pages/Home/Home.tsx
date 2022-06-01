import { useEffect, useState } from 'react';
import {
  ContactsList, PageWrapper, SearchInput,
} from 'components';

export type ContactList = {
  id: string;
  name: string;
  email: string;
  phone: string;
  category_id: string;
  category_name: string;
}[];

export function Home() {
  const [contacts, setContacts] = useState<ContactList>([] as ContactList);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (res) => {
        const data = await res.json();
        setContacts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(contacts);

  return (
    <PageWrapper>
      <SearchInput />
      <ContactsList contacts={contacts} />
    </PageWrapper>
  );
}
