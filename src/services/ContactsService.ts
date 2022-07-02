import HttpClient from './utils/HttpClient';

class ContactsService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(process.env.REACT_APP_API_URL || 'http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContacts(contact:any) {
    return this.httpClient.post('/contacts', contact);
  }
}

export default new ContactsService();
