import React from 'react';
import PropTypes from 'prop-types';

//import NextButton from '../NextButton';

class AdminPage extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    this.Keypress = this.Keypress.bind(this);
  }
 
 Keypress(name, value) {
    this.props.updateGstAction(this.props.gstReview, name, value);
  }
 
 render() {
    //const {gstReview} = this.props;
    //console.log({gstReview});
    return (
      <div>
        <h1>Admin Page</h1>
       <table>
       <tbody>
       <tr>
       <td>Enter total sales and income</td>
       <td><input type="decimal"  name="totalSandI" value="0" /></td>
       </tr>
       </tbody>
       </table>

      </div>
    );
  }
}

AdminPage.propTypes = {
  updateGstAction: PropTypes.func.isRequired,
  gstReview: PropTypes.object.isRequired
};


export default AdminPage;