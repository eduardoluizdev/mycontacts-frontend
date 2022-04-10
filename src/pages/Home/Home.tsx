import {
  ContactsList, PageWrapper, SearchInput,
} from '../../components';

export function Home() {
  return (
    <PageWrapper>
      {/* <Modal title="Titulo do Modal" paragraph="Paragrafo do modal" danger /> */}
      <SearchInput />
      <ContactsList />
    </PageWrapper>
  );
}
