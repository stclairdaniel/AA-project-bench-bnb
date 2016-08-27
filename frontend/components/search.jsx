import React from 'react';
import BenchMap from './bench_map.jsx';
import BenchIndex from './bench_index.jsx';

const Search = (props) => (
  <div>
    <BenchMap benches={props.benches} />
    <BenchIndex benches={props.benches} requestBenches={props.requestBenches} />
  </div>
);

export default Search;
