import { FilterConstants } from '../actions/filter_actions.js';

const FilterReducer = (state={ bounds: {} }, action) => {
  switch(action.type) {
    case FilterConstants.UPDATE_BOUNDS:
      return {bounds: action.bounds};
    default:
      return state;
  }
};

export default FilterReducer;
