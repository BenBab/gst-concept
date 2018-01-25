import * as types from '../constants/actionTypes';
//import calculator from '../utils/gstReturnCalculator';
//import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function cPurchaseAndExpenseReducer(state = initialState.purchaseAndExpense, action) {

  switch (action.type) {
    
    case types.UPDATE_PURCHASE_AND_EXPENSE:
      return[...state, Object.assign({},action.gst)];

      
    default:
      return state;
  }
}
