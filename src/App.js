import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import LandingPage from './components/Landing';
import SignUpPage from './components/SignUp';
import SignInPage from './components/SignIn';
import PasswordForgetPage from './components/PasswordForget';
import HomePage from './components/Home';
import AccountPage from './components/Account';
import * as routes from './constants/routes';
import withAuthentication from './hoc/withAuthentication';

// import firebaseui from 'firebaseui';
import './App.css';

class App extends Component {

  render() {
    return(
      <Router>
      <div>
        <Navigation />
          <hr/>
  
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      </div>
    </Router>

    )
  }
}
//https://stackoverflow.com/questions/33924150/how-to-access-canvas-context-in-react?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

export default withAuthentication( App);
