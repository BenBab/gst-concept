import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class DReview extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state ={
    
    };

    

   }


   roundNumber(numberToRound, numberOfDecimalPlaces) {
    if (numberToRound === 0) {
      return 0;
    }

    if (!numberToRound) {
      return '';
    }

    const scrubbedNumber = numberToRound.toString().replace('$', '').replace(',', '');
    return Math.round(scrubbedNumber * Math.pow(10, numberOfDecimalPlaces)) / Math.pow(10, numberOfDecimalPlaces);
  }



  render() {
      
      const sI_LastArray = this.props.salesAndIncome[this.props.salesAndIncome.length - 1];
      const dA_LastArray = this.props.debitAdjustment[this.props.debitAdjustment.length - 1];
      const pE_LastArray = this.props.purchaseAndExpense[this.props.purchaseAndExpense.length - 1];
      const cA_LAstArray = this.props.creditAdjustments[this.props.creditAdjustments.length - 1];

      const totalGstOnSalesAndIncome = +sI_LastArray.totalGstCollected + +dA_LastArray.totalDebitAdjustments;
      const totalGstPaidPurchaseAndExpense = +pE_LastArray.totalGstPaid + +cA_LAstArray.totalCreditAdjustments;
      
      const totalAll = totalGstOnSalesAndIncome - totalGstPaidPurchaseAndExpense;
          
    return (
     <div>
        <h1 className = "menu-tabs">Filing option >> Sales and Income >> Purchases and Income >> Review</h1>
        <section className="main">
            <table>
                <tbody>
                    <tr>
                        <th><h3>Review</h3></th>
                    </tr>
                    <tr>
                        <td colSpan= "2"><p>Please review the following information for accuracy before submission. If something is in error, you may use the navigation buttons to return to a previous screen.</p><p>Otherwise, please proceed and submit your return for processing</p></td>
                    </tr>
                    <tr>
                        <th>SALES AND INCOME</th>
                    </tr>
                    <tr>
                        <td>Total sales and income</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(sI_LastArray.totalSandI,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>Zero-reated supplies</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(sI_LastArray.zeroRelatedSupplies,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>Net GST sales and income</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(sI_LastArray.netgstSandI,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>Total GST collected on sales and income</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(sI_LastArray.totalGstCollected,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>Total debit adjustments</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(dA_LastArray.totalDebitAdjustments,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>Total GST on sales and income</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(totalGstOnSalesAndIncome,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <th>PURCHASES AND EXPENSES</th>
                    </tr>
                    <tr>
                        <td>Total purchases and expenses</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(pE_LastArray.totalPandE,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>GST Paid</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(pE_LastArray.totalGstPaid,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>Total credit adjustments</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(cA_LAstArray.totalCreditAdjustments,2)} placeholder="0.00" disabled/></td>
                    </tr>
                    <tr>
                        <td>Total GST paid for purchases and expenses</td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(totalGstPaidPurchaseAndExpense,2)} placeholder="0.00" disabled/></td>
                    </tr>

                    {totalAll >= 0
                        ?
                        <tr>
                        <td><b>Total GST to pay</b></td>
                        <td><span>$</span><input type="number" defaultValue={this.roundNumber(totalAll,2)} placeholder="0.00" disabled/></td>
                        </tr>
                        :
                        <tr>
                        <td><b>Your GST refund amount</b></td>
                        <td><span>$</span><input type="number" defaultValue={Math.abs(this.roundNumber(totalAll,2))} placeholder="0.00" disabled/></td>
                        </tr>
                    }

                    


                </tbody>    
            </table>

            <div className="bottom-bar">
            <Link to="/purchases-and-expenses"><span className="button next-button">Back</span></Link>
            <Link to="/declaration"><span className="button next-button">Next</span></Link>
            </div>
        </section>
      </div>
    );
  }
}

DReview.propTypes = {
  salesAndIncome: PropTypes.array.isRequired,
  debitAdjustment: PropTypes.array.isRequired,
  purchaseAndExpense: PropTypes.array.isRequired,
  creditAdjustments: PropTypes.array.isRequired

};

function mapStateToProps(state) {
  return {
    salesAndIncome: state.salesAndIncome,
    debitAdjustment: state.debitAdjustments,
    purchaseAndExpense: state.purchaseAndExpense,
    creditAdjustments: state.creditAdjustments

  };
}

export default connect(mapStateToProps)(DReview);


