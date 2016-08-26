import { Provider } from 'react-redux';
import BenchIndexContainer from './bench_index_container.js';
import React from 'react';

const Root = ({store}) => (
  <Provider store={store}>
    <BenchIndexContainer />
  </Provider>
);

export default Root;
