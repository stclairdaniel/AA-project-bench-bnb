import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
window.signup = signup
window.login = login
window.logout = logout

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = window.store = configureStore();
  ReactDom.render(<Root store={store}/>, root);
});
