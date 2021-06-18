import React, { Component } from 'react';

import { withAuthState } from 'components/hoc/auth';

import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    const { login } = this.props;

    return (
      <div className="row " style={{ height: '90vh' }}>
        <div className="col-sm-3 m-auto">
          <h3 className="text-center p-2 border-top border-left border-right border-muted">Sign In</h3>
          <div className="card card-block w-100">
            <LoginForm login={login} />
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthState(Login);
