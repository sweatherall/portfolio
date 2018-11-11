import React from 'react';
import Portfolio from '../features/portfolio/Portfolio';
import AboutMe from '../features/aboutme/AboutMe';
import Textual from '../features/textual/Textual';
import Admin from '../features/admin/Admin';
import NotFound from '../features/notfound/NotFound';
import Navigation from '../navigation/Navigation';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navigation />
      
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/personal" component={AboutMe} />
        <Route exact path="/textual" component={Textual} />
        <Route exact path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App
