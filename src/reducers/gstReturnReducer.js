import * as types from '../constants/actionTypes';
//import calculator from '../utils/gstReturnCalculator';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function gstReturnReducer(state = initialState.gstReview, action) {
  let newState;

  switch (action.type) {
    
    case types.UPDATE_GST_RETURN:
      return[...state, Object.assign({},action.gst)];

    case types.UPDATE_GST_NEW:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;

      return newState;  

    default:
      return state;
  }
}
