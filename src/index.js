import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import UserProvider from './hooks/UserContext';
import App from './components/App';

import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Level from './pages/Level';
import Credits from './pages/Credits';
import NoMatch from './pages/404';

const { createBrowserHistory } = require('history');

const history = createBrowserHistory();

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/levels/:level" component={Level} />
          <Route path="/credits" component={Credits} />
          <Route component={NoMatch} />
        </Switch>
      </App>
    </Router>
  </UserProvider>,
);
