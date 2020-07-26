import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import Binding from './views/Binding';
import Conditionals from './views/Conditionals';
import Repetitions from './views/Repetitions';
import Mount from './views/Mount';
import Unmount from './views/Unmount';

const Router = () => (
  <BrowserRouter>
    <Route path="/" exact component={ Home } />
    <Route path="/binding" exact component={ Binding } />
    <Route path="/conditionals" exact component={ Conditionals } />
    <Route path="/repetitions" exact component={ Repetitions } />
    <Route path="/mount" exact component={ Mount } />
    <Route path="/unmount" exact component={ Unmount } />
  </BrowserRouter>
);

export default Router;
