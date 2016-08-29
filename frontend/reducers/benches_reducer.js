import { BenchConstants } from '../actions/bench_actions.js';

const BenchesReducer = (state = [], action) => {
  switch(action.type) {
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    case BenchConstants.RECEIVE_BENCH:
      return [...state, action.bench];
    default:
      return state;
  }
};

export default BenchesReducer;
