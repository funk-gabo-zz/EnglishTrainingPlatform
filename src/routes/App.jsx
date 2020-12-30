import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import WeekChallenges from '../containers/WeekChallenges';
import WeekTopics from '../containers/WeekTopics';
import WeekSkills from '../containers/WeekSkills';
import WeekPartners from '../containers/WeekPartners';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/topics' component={WeekTopics} />
        <Route exact path='/challenges' component={WeekChallenges} />
        <Route exact path='/skills' component={WeekSkills} />
        <Route exact path='/partners' component={WeekPartners} />
        <Route component={NotFound} />
        <Route component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
