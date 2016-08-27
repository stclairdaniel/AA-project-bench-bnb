import { Provider } from 'react-redux';
import SearchContainer from './search_container.js';
import React from 'react';

const Root = ({store}) => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);

export default Root;
