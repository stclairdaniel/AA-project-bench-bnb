import React from 'react';
import { Link, withRouter} from 'react-router';
import { login, signup } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this._handleUsernameChange = this._handleUsernameChange.bind(this);
    this._handlePasswordChange = this._handlePasswordChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleUsernameChange (e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  _handlePasswordChange (e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  }

  _handleClick (e) {
    e.preventDefault();
    const fun = this.props.formType === "login"  ? login : signup;
    this.props.processForm(fun(this.state));
    if (this.props.errors.length < 1) {
      this.props.router.push("/");
    }
  }

  render () {
    const type = this.props.formType === "login" ? "Log In" : "Sign Up";

    const link = this.props.formType === "login" ? <Link to="signup">Sign Up</Link> : <Link to="login">Log In</Link>;


    const errors = [];
    this.props.errors.forEach( error => {
      errors.push(<li key={error}>{error}</li>);
    });

    return (
    <div>
      <h1>{type}</h1>

      <ul>
        {errors}
      </ul>

      <label>Username
        <input onChange={this._handleUsernameChange}></input>
      </label>

      <label>Password
        <input type="password" onChange={this._handlePasswordChange}></input>
      </label>

      <button onClick={this._handleClick}>{type}</button>

      <p>{link} instead?</p>
    </div>
    );
  }

}

export default withRouter(SessionForm);
