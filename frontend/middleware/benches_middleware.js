import { BenchConstants } from '../actions/bench_actions.js';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case BenchConstants.REQUEST_BENCHES:
      console.log('fetching benches');
      return next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
