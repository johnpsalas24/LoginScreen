// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* Add routes for Forgot Password and Create Account */}
          {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
          {/* <Route path="/signup" component={Signup} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
