import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as gstReturnActions from '../../../actions/gstReturnActions';
import {bindActionCreators} from 'redux';

class DebitAdjustment extends React.Component {
    constructor(props, context) {
        super(props, context);

     this.state ={
        gst: Object.assign({}, this.props.gstReturn[this.props.gstReturn.length - 1]),

     };

    this.onAdjustmentsChange = this.onAdjustmentsChange.bind(this);

}

/*
componentWillReceiveProps(nextProps) {
     {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({gst: Object.assign({}, nextProps.gst)});
    }
  }
*/
  
    onAdjustmentsChange(event){
     const field = event.target.name;
     let gst = this.state.gst;
     gst[field] = event.target.value;
     gst.totalDebitAdjustments = (+gst.privateBusinessGoods + +gst.businessAssets + +gst.assetsKept + +gst.entertainmentExpenses + +gst.changeAccounting + +gst.goodsMakingExemptSupplies + +gst.adjustmentsAtTwelve + +gst.other);
     this.setState({gst : gst});
     this.props.actions.updateDebitAdjustments(this.state.gst);

  }

  render() {


    
    return (
     
            <table>
                <tbody>
                    <tr>
                        <th>ENTER YOUR DEBIT ADJUSTMENTS</th>
                    </tr>
                    <tr>
                        <td colSpan= "2"><p>Use this form below to calculate the GST on your adjustments for your GST return.</p></td>
                    </tr>
                    <tr>
                        <td>Private use of business goods and services for annual or period-by-period adjustments</td>
                        <td><span>$</span><input type="decimal" name ="privateBusinessGoods" value= {this.props.gstReturn[this.props.gstReturn.length - 1].privateBusinessGoods} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Business assets used privately (a one-off adjustment)</td>
                        <td><span>$</span><input type="decimal"  name ="businessAssets" value= {this.props.gstReturn[this.props.gstReturn.length - 1].businessAssets} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Assets kept after ceasing to be registered</td>
                        <td><span>$</span><input type="decimal" name ="assetsKept" value= {this.props.gstReturn[this.props.gstReturn.length - 1].assetsKept} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Entertainment expenses (once a year only)</td>
                        <td><span>$</span><input type="decimal" name ="entertainmentExpenses" value= {this.props.gstReturn[this.props.gstReturn.length - 1].entertainmentExpenses} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Change of accounting basis</td>
                        <td><span>$</span><input type="decimal" name ="changeAccounting" value= {this.props.gstReturn[this.props.gstReturn.length - 1].changeAccounting} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Goods and services used in making exempt supplies for annual or period-by-period adjustments</td>
                        <td><span>$</span><input type="decimal" name ="goodsMakingExemptSupplies" value= {this.props.gstReturn[this.props.gstReturn.length - 1].goodsMakingExemptSupplies} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Adjustments at 12.5% GST rate (such as: debit and credit notes, receiving finance lease payments)</td>
                        <td><span>$</span><input type="decimal" name ="adjustmentsAtTwelve" value= {this.props.gstReturn[this.props.gstReturn.length - 1].adjustmentsAtTwelve} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td>Other (such as: barter, bad debts recovered, exported secondhand goods, insurance payments received)</td>
                        <td><span>$</span><input type="decimal" name ="other" value= {this.props.gstReturn[this.props.gstReturn.length - 1].other} onChange = {this.onAdjustmentsChange} placeholder="0.00" /></td>
                    </tr>
                    <tr>
                        <td><b>Total adjustments</b></td>
                        <td><span>$</span><input type="number" name ="totalDebitAdjustments" value= {this.props.gstReturn[this.props.gstReturn.length - 1].totalDebitAdjustments}   placeholder="0.00" disabled/></td>
                    </tr>  
                </tbody>    
            </table>
      
    );
  }
}


DebitAdjustment.propTypes = {
    gst: PropTypes.object,
    gstReturn: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };


function mapStateToProps(state) {
  return {
    gstReturn: state.debitAdjustments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gstReturnActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DebitAdjustment);