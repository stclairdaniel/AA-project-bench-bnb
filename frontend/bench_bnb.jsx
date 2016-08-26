import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store.js';

//Test
import * as benchActions from './actions/bench_actions.js';
import { fetchBenches } from './util/bench_api_util.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = window.store = configureStore();
  window.requestBenches = benchActions.requestBenches;
  window.receiveBenches = benchActions.receiveBenches;
  window.fetchBenches = fetchBenches;
  ReactDom.render(<div>It worked</div>, root);
});
