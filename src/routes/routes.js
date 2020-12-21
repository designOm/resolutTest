import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllProperties from '../pages/AllProperties';
import Portfolio from '../pages/Portfolio';
import Transparency from '../pages/Transparency';
import Wallet from '../pages/Wallet';
import Wolfpacks from '../pages/Wolfpacks';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Wallet} />
    <Route path='/wallet' component={Wallet} />
    <Route path='/wolfpack' component={Wolfpacks} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/transparency' component={Transparency} />
    <Route path='/all-properties' component={AllProperties} />
  </Switch>
);

export default Routes;