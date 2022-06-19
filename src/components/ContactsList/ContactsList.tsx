import { Link } from 'react-router-dom';

import arrow from 'assets/images/icons/arrow.svg';
import edit from 'assets/images/icons/edit.svg';
import trash from 'assets/images/icons/trash.svg';
import sad from 'assets/images/sad.svg';

import { Contact } from 'modules/contact.type';
import { Button } from 'components/FormElements';
import {
  Container, Header, ListHeader, Card, ErrorContainer,
} from './styles';

type ContactsListProps = {
  contacts: Contact[]
  handleToggleOrderBy: VoidFunction
  orderBy: 'asc' | 'desc'
  hasError: boolean
};

export function ContactsList({
  contacts, orderBy, handleToggleOrderBy, hasError,
}: ContactsListProps) {
  return (
    <Container>
      <Header hasError={hasError}>
        {!hasError && (
          <strong>
            {contacts.length}
            {contacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}

        <Link to="/new">Novo contato</Link>
      </Header>

      {contacts.length > 0
      && (
      <ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>

          <img src={arrow} alt="Icone de Seta" />
        </button>
      </ListHeader>
      )}

      {hasError && (
      <ErrorContainer>
        <img src={sad} alt="sad" />

        <div className="details">
          <strong>Ocorreu um erro ao obter os seus contatos!</strong>
          <Button type="button">
            Tentar Novamente
          </Button>
        </div>
      </ErrorContainer>
      )}

      {contacts.map((contact) => (
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

    </Container>
  );
}
