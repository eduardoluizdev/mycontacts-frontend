import {
  ContactsList, PageWrapper, SearchInput,
} from '../../components';

export function Home() {
  return (
    <PageWrapper>
      <SearchInput />
      <ContactsList />
    </PageWrapper>
  );
}
