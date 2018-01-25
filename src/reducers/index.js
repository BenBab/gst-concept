// Set up your root reducer here...
import { combineReducers } from 'redux';
import gstReturn from './gstReturnReducer';
import salesAndIncome from './aSalesAndIncomeReducer';
import debitAdjustments from './bDebitAdjustmentsReducer';
import purchaseAndExpense from './cPurchaseAndExpenseReducer';
import creditAdjustments from './dCreditAdjustmentsReducer';

const rootReducer = combineReducers({
 salesAndIncome, debitAdjustments , purchaseAndExpense, creditAdjustments , gstReturn
});

 export default rootReducer;