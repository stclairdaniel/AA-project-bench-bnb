import { combineReducers } from 'redux';
//Reducers
import BenchesReducer from './benches_reducer.js';

const RootReducer = combineReducers({
  benches: BenchesReducer
});

export default RootReducer;
