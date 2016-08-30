//Actions
import { BenchConstants, receiveBenches, requestBenches, receiveBench } from '../actions/bench_actions';
//Util
import { FilterConstants } from '../actions/filter_actions';
import { fetchBenches, createBench } from '../util/bench_api_util';

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
    case BenchConstants.CREATE_BENCH:
      const createSuccess = data => dispatch(receiveBench(data));
      createBench(action.bench, createSuccess);
      next(action);
    default:
      return next(action);
  }
};

export default BenchesMiddleware;
