import { Link } from 'react-router-dom';

import arrow from 'assets/images/icons/arrow.svg';
import edit from 'assets/images/icons/edit.svg';
import trash from 'assets/images/icons/trash.svg';

import { ContactList } from 'pages';
import {
  Container, Header, ListContainer, Card,
} from './styles';

type ContactsListProps = {
  contacts: ContactList
};

export function ContactsList({ contacts }: ContactsListProps) {
  return (
    <Container>
      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Icone de Seta" />
          </button>
        </header>

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

      </ListContainer>
    </Container>
  );
}
