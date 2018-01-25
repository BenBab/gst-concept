import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as gstReturnActions from '../../actions/gstReturnActions';
import {bindActionCreators} from 'redux';
import { Link , browserHistory } from 'react-router';

import DebitAdjustment from './adjustments/DebitAdjustment';



class BSalesAndIncome extends React.Component {
  
 constructor(props, context) {
    super(props, context);
    
    this.state ={
        gst: Object.assign({}, props.gstReturn[this.props.gstReturn.length - 1]),
        isAdjustments : false     
    };

    this.onTotalsalesIncomeChange = this.onTotalsalesIncomeChange.bind(this);
    this.onZeroRatedChange = this.onZeroRatedChange.bind(this);
    this.bindState = this.bindState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

   
 
}


 onTotalsalesIncomeChange(event){
     const gst = this.state.gst;
     gst.totalSandI = event.target.value;
     gst.netgstSandI = this.roundNumber(+gst.totalSandI - +gst.zeroRelatedSupplies,2);
     gst.totalGstCollected = this.roundNumber((((+gst.totalSandI - +gst.zeroRelatedSupplies)*3)/23),2);
     this.setState({gst : gst});
     this.props.actions.updateSalesAndIncome(this.state.gst);
     
 }

 onZeroRatedChange(event){
     const gst = this.state.gst;
     gst.zeroRelatedSupplies = event.target.value;
     gst.netgstSandI = this.roundNumber(+gst.totalSandI - +gst.zeroRelatedSupplies,2);
     gst.totalGstCollected = this.roundNumber((((+gst.totalSandI - +gst.zeroRelatedSupplies)*3)/23),2);
     this.setState({gst : gst});
     this.props.actions.updateSalesAndIncome(this.state.gst);
    // var netgstSandI = (`${this.state.gst.totalSandI - this.state.gst.zeroRelatedSupplies}`);
    //console.log(`${netgstSandI}`)
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

  bindState(property, value) {
    let that = this;
    if (value !== undefined) {
      return () => { that.setState({[property]: value}); };
    } else {
      return (event) => { that.setState({[property]: event.target.value}); };
    }
  }


   handleSubmit(event) {
        event.preventDefault();
        this.props.actions.updateGstReturn(this.state.gst);
        browserHistory.push("/purchases-and-expenses");
    } 






  render() {

    //const gstLastArrayVal = this.props.gstReturn[this.props.gstReturn.length - 1];
    
    return (
     <div>
        <h1 className = "menu-tabs">Filing option >> Sales and Income</h1>
        <section className="main">
            <table>
                <tbody>
                    <tr>
                        <th>SALES AND INCOME</th>
                    </tr>
                    <tr>
                        <td>Enter your total sales and income</td>
                        <td><span>$</span><input type="decimal" name="totalSandI" defaultValue={this.props.gstReturn[this.props.gstReturn.length - 1].totalSandI} onChange ={this.onTotalsalesIncomeChange} placeholder="0.00"/></td>
                    </tr>
                    <tr>
                        <td>Enter your zero-reated supplies</td>
                        <td><span>$</span><input type="decimal" name= "zeroRelatedSupplies" defaultValue={this.props.gstReturn[this.props.gstReturn.length - 1].zeroRelatedSupplies} onChange ={this.onZeroRatedChange} placeholder="0.00"/></td>
                    </tr>
                    <tr>
                        <td>Net GST sales and income</td>
                        <td><span>$</span><input type="number"  value={this.props.gstReturn[this.props.gstReturn.length - 1].netgstSandI} disabled placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Total GST collected on sales and income</td>
                        <td><span>$</span><input type="number" value={this.props.gstReturn[this.props.gstReturn.length - 1].totalGstCollected} disabled placeholder="0.00"/></td>
                    </tr>
                    <tr>
                        <th>DEBIT ADUSTMENTS</th>
                    </tr>
                    <tr>
                        <td>Do you have debit adjustments?</td>
                        <td><input type="submit" className ="wide-button" value="Yes" onClick = {this.bindState('isAdjustments', true)}/>
                            <input type="submit" className ="wide-button" value="No" onClick = {this.bindState('isAdjustments', false)}/>
                        </td>
                        
                    </tr>
                    
              
                    
                </tbody>    
            </table>
            
            {this.state.isAdjustments 
                ?
                <div>
                <DebitAdjustment gst = {this.props.gstReturn[this.props.gstReturn.length - 1]}  />           
                </div>
                :
                ''
            }
          
            <div className="bottom-bar">
            <Link to="/filing-option"><span className="button next-button">Back</span></Link>
            <Link to="/purchases-and-expenses"><span className="button next-button">Next</span></Link>
            
            
            </div>
        </section>
      </div>
    );
  }
}



BSalesAndIncome.propTypes = {
  gstReturn: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    gstReturn: state.salesAndIncome
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gstReturnActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BSalesAndIncome);