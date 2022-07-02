/* eslint-disable react/jsx-one-expression-per-line */
import { Link } from 'react-router-dom';

import { Button } from 'components';

import arrow from 'assets/images/icons/arrow.svg';
import edit from 'assets/images/icons/edit.svg';
import trash from 'assets/images/icons/trash.svg';
import sad from 'assets/images/sad.svg';
import emptyBox from 'assets/images/empty-box.svg';
import magnifierQuestion from 'assets/images/magnifier-question.svg';

import { Contact } from 'modules/contact.type';

import {
  Container,
  Header,
  ListHeader,
  Card,
  ErrorContainer,
  EmptyListContainer,
  SearchNotFoundContainer,
} from './styles';

type ContactsListProps = {
  contacts: Contact[]
  filteredContacts: Contact[]
  handleToggleOrderBy: VoidFunction
  orderBy: 'asc' | 'desc'
  hasError: boolean
  handleTryAgain: VoidFunction
  isLoading: boolean,
  searchTerm: string
};

export function ContactsList({
  contacts,
  filteredContacts,
  orderBy,
  handleToggleOrderBy,
  hasError,
  handleTryAgain,
  isLoading,
  searchTerm,
}: ContactsListProps) {
  return (
    <Container>
      <Header
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )
        }
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}

        <Link to="/new">Novo contato</Link>
      </Header>

      {hasError && (
      <ErrorContainer>
        <img src={sad} alt="sad" />

        <div className="details">
          <strong>Ocorreu um erro ao obter os seus contatos!</strong>
          <Button onClick={handleTryAgain}>
            Tentar Novamente
          </Button>
        </div>
      </ErrorContainer>
      )}

      {!hasError && (
      <>
        {(contacts.length < 1 && !isLoading) && (
          <EmptyListContainer>
            <img src={emptyBox} alt="empty box" />

            <p>Você ainda não tem nenhum contato cadastrado!
              Clique no botão <strong>”Novo contato”</strong> à cima para cadastrar o
              seu primeiro!
            </p>
          </EmptyListContainer>
        )}

        {(contacts.length > 0 && filteredContacts.length < 1) && (
          <SearchNotFoundContainer>
            <img src={magnifierQuestion} alt="magnifier question" />
            <span>Nenhum resultado foi encontrado para <strong>{searchTerm}</strong>.</span>
          </SearchNotFoundContainer>
        )}

        {filteredContacts.length > 0 && (
          <ListHeader orderBy={orderBy}>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>

              <img src={arrow} alt="Icone de Seta" />
            </button>
          </ListHeader>
        )}

        {filteredContacts.map((contact) => (
          <Card key={contact.id}>
            <div className="info">
              <div className="contact-name">
                <strong>{contact.name}</strong>
                {contact.category_name && <small>{contact.category_name}</small>}
              </div>
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>
            <div className="actions">
              <Link to={`/edit/${contact.id}`}>
                <img src={edit} alt="edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="trash" />
              </button>
            </div>
          </Card>
        ))}

      </>
      )}

    </Container>
  );
}
