import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as gstReturnActions from '../../actions/gstReturnActions';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';

import CreditAdjustment from './adjustments/CreditAdjustment';

class CPurchasesAndExpense extends React.Component {
  
   constructor(props, context) {
    super(props, context);
    
    this.state ={
        gst: Object.assign({}, props.gstReturn[this.props.gstReturn.length - 1])
           
    };

    this.onPurchaseAndExpenseChange = this.onPurchaseAndExpenseChange.bind(this);
    this.isAdjustments = this.isAdjustments.bind(this);

   }

 onPurchaseAndExpenseChange(event){
     const field = event.target.name;
     let gst = this.state.gst;
     gst[field] = event.target.value;
     gst.totalGstPaid = this.roundNumber(((+gst.totalPandE * 3)/23),2);
     this.setState({gst : gst});
     this.props.actions.updatePurchasesAndExpenses(this.state.gst);

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
  
  
  isAdjustments(event){
    event.preventDefault();
    const field = event.target.name;
    let isClicked = this.state.gst;
    if (field == "yes"){
        isClicked.creditAdjustment = true;
    }else{
        isClicked.creditAdjustment = false;
    }
    this.setState({gst:isClicked});
    this.props.actions.updatePurchasesAndExpenses(this.state.gst);

  }


  render() {
    
    return (
      <div>
        <h1 className = "menu-tabs">Filing option >> Sales and Income >> Purchases and Income</h1>
        <section className="main">
            <table>
                <tbody>
                    <tr>
                        <th>PURCHASES AND EXPENSES</th>
                    </tr>
                    <tr>
                        <td>Enter your total purchases and expenses</td>
                        <td><span>$</span><input type="decimal" name ="totalPandE" defaultValue= {this.props.gstReturn[this.props.gstReturn.length - 1].totalPandE} onChange = {this.onPurchaseAndExpenseChange} placeholder="0.00"/></td>
                    </tr>
                    <tr>
                        <td>Total GST paid</td>
                        <td><span>$</span><input type="number" name ="totalGstPaid" value= {this.props.gstReturn[this.props.gstReturn.length - 1].totalGstPaid} onChange = {this.onPurchaseAndExpenseChange} placeholder="0.00" disabled/></td>
                    </tr>
    
                    <tr>
                        <th>CREDIT ADUSTMENTS</th>
                    </tr>
                    <tr>
                        <td>Do you have credit adjustments?</td>
                        <td>
                        <input type="submit" className ="wide-button" value="Yes" name= "yes" onClick = {this.isAdjustments} />
                        <input type="submit" className ="wide-button" value="No"  name= "no" onClick = {this.isAdjustments}/>
                        </td>
                        
                    </tr>
                </tbody>    
            </table>

            


            {this.state.gst.creditAdjustment
                ?
                <div>
                <CreditAdjustment />           
                </div>
                :
                ''
            }
           

            <div className="bottom-bar">
            <Link to="/sales-and-income"><span className="button next-button">Back</span></Link>
            <Link to="/review"><span className="button next-button">Next</span></Link>
            </div>
        </section>
      </div>
    );
  }
}


CPurchasesAndExpense.propTypes = {
  gstReturn: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    gstReturn: state.purchaseAndExpense
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gstReturnActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CPurchasesAndExpense);