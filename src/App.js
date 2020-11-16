import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { ServerProvider } from './context';
import PageNotFound from './components/PageNotFound';
import Home from './pages/Home';

const App = () => (
  <ServerProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  </ServerProvider>
);

export default App;