import { applyMiddleware } from 'redux';
//Middleware
import BenchesMiddleware from './benches_middleware';
import SessionMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(
  BenchesMiddleware,
  SessionMiddleware
);

export default RootMiddleware;
