import { BenchConstants, receiveBenches, requestBenches } from '../actions/bench_actions.js';
import { fetchBenches } from '../util/bench_api_util.js';
import { FilterConstants } from '../actions/filter_actions.js';

const BenchesMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case BenchConstants.REQUEST_BENCHES:
      const filters = getState().filters;
      const success = data => dispatch(receiveBenches(data));
      fetchBenches(filters, success);
      break;
    case FilterConstants.UPDATE_BOUNDS:
      next(action);
      dispatch(requestBenches());
      break;
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
