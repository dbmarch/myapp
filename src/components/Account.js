import React from 'react';

import AuthUserContext from '../hoc/AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

export default AccountPage;