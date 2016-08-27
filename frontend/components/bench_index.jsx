import React from 'react';
import BenchIndexItem from './bench_index_item.jsx';

class BenchIndex extends React.Component {
  render() {
    const benchIndexLis = this.props.benches.map((bench) => {
        return <BenchIndexItem bench={bench} key={bench.description}/>;
      });

    return (<ul>{benchIndexLis}</ul>);
  }
}

export default BenchIndex;
