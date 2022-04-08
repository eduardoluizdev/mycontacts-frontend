import { Route, Switch } from 'react-router-dom';

import { Home, CreateContact, EditContact } from '../pages';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={CreateContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
