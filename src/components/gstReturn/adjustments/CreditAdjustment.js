import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as gstReturnActions from '../../../actions/gstReturnActions';
import {bindActionCreators} from 'redux';


class CreditAdjustment extends React.Component {
    constructor(props, context) {
        super(props, context);

     this.state ={
        gst: Object.assign({}, this.props.gstReturn[this.props.gstReturn.length - 1]),

     };

    this.onAdjustmentsChange = this.onAdjustmentsChange.bind(this);

}

    onAdjustmentsChange(event){
     const field = event.target.name;
     let gst = this.state.gst;
     gst[field] = event.target.value;
     gst.totalCreditAdjustments = (+gst.businessPrivateGoods + +gst.privateAssets + +gst.changeAccountingCredit + +gst.creditAdjustmentsAtTwelve + +gst.other);
     this.setState({gst : gst});
     this.props.actions.updateCreditAdjustments(this.state.gst);

  }

  render() {


    
    return (
     
            <table>
                <tbody>
                    <tr>
                        <th>ENTER YOUR CREDIT ADJUSTMENTS</th>
                    </tr>
                    <tr>
                        <td colSpan= "2"><p>Use this form below to calculate the GST on your adjustments for your GST return.</p></td>
                    </tr>
                    <tr>
                        <td>Business use of private/exempt goods and services for annual or period-by-period adjustments</td>
                        <td><span>$</span><input type="decimal" name ="businessPrivateGoods" value= {this.props.gstReturn[this.props.gstReturn.length - 1].businessPrivateGoods} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Private assets used for business costing less than $18,000 (a one-off adjustment)</td>
                        <td><span>$</span><input type="decimal"  name ="privateAssets" value= {this.props.gstReturn[this.props.gstReturn.length - 1].privateAssets} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Change of accounting basis</td>
                        <td><span>$</span><input type="decimal" name ="changeAccountingCredit" value= {this.props.gstReturn[this.props.gstReturn.length - 1].changeAccountingCredit} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Credits at 12.5% GST rate (such as: late claims, debit and credit notes, finance lease payments)</td>
                        <td><span>$</span><input type="decimal" name ="creditAdjustmentsAtTwelve" value= {this.props.gstReturn[this.props.gstReturn.length - 1].creditAdjustmentsAtTwelve} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Other (such as: bad debts written off, GST content shown on Customs’ invoices)</td>
                        <td><span>$</span><input type="decimal" name ="other" value= {this.props.gstReturn[this.props.gstReturn.length - 1].other} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td><b>Total credit adjustments.</b></td>
                        <td><span>$</span><input type="decimal" name ="totalCreditAdjustments" value= {this.props.gstReturn[this.props.gstReturn.length - 1].totalCreditAdjustments} onChange = {this.onAdjustmentsChange} placeholder="0.00" disabled/></td>
                    </tr>
 
                </tbody>    
            </table>
      
    );
  }
}

CreditAdjustment.propTypes = {
    gst: PropTypes.object,
    gstReturn: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };


function mapStateToProps(state) {
  return {
    gstReturn: state.creditAdjustments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gstReturnActions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(CreditAdjustment);