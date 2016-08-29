import React from 'react';
import BenchIndexItem from './bench_index_item.jsx';

class BenchIndex extends React.Component {
  render() {
    const benchIndexLis = this.props.benches.map((bench, index) => {
        return <BenchIndexItem bench={bench} key={bench.description + index}/>;
      });

    return (<ul>{benchIndexLis}</ul>);
  }
}

export default BenchIndex;
