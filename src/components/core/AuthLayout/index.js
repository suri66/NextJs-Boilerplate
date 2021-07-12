import { Component } from 'react';

class AuthLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="login-wrapper">
        <div className="login-content">
          <div>
            <img
              className="login-logo"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2>Sign in to your account</h2>
            <p>
              Or <a className="">start your 14-day free trial</a>
            </p>
          </div>
          {children}
        </div>
      </div>
    );
  }
}
export default AuthLayout;
