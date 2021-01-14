import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Calendar from './components/Calendar';
import ReminderModal from './components/ReminderModal';

const Routes = () => {
  return (
    <BrowserRouter>
      <Calendar />

      <Switch>
        <Route path="/events/create" exact component={ReminderModal} />
        <Route path="/events/edit/:id" exact component={ReminderModal} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
