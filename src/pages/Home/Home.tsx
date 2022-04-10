import {
  ContactsList, Loader, PageWrapper, SearchInput,
} from '../../components';

export function Home() {
  return (
    <PageWrapper>
      <Loader />
      <SearchInput />
      <ContactsList />
    </PageWrapper>
  );
}
