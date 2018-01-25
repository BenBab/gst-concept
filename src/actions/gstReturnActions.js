import * as types from '../constants/actionTypes';

export function updateGstReturn(gst) {
  return {  type: types.UPDATE_GST_RETURN, gst };
}

export function updateGstAction(fieldName, value) {
  return {
    type: types.UPDATE_GST_NEW,
    fieldName,
    value
 };
}

export function updateSalesAndIncome(gst) {
  return {  type: types.UPDATE_SALES_AND_INCOME, gst };
}


export function updateDebitAdjustments(gst) {
  return {  type: types.UPDATE_DEBIT_ADJUSTMENTS, gst };
}


export function updateCreditAdjustments(gst) {
  return {  type: types.UPDATE_CREDIT_ADJUSTMENTS, gst };
}

export function updatePurchasesAndExpenses(gst) {
  return {  type: types.UPDATE_PURCHASE_AND_EXPENSE, gst };
}