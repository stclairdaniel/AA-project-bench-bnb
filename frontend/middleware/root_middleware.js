import { applyMiddleware } from 'redux';
//Middleware
import BenchesMiddleware from './benches_middleware.js';

const RootMiddleware = applyMiddleware(
  BenchesMiddleware
);

export default RootMiddleware;
